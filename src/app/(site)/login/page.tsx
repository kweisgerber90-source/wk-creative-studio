"use client"
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

function useQuery() {
  const [params, setParams] = useState<URLSearchParams | null>(null)
  useEffect(() => { setParams(new URLSearchParams(window.location.search)) }, [])
  return params
}

type Comment = { id: string; text: string; pin: number }

export default function LoginPreviewPage() {
  const q = useQuery()
  const project = q?.get('project')
  const token = q?.get('token')
  const valid = useMemo(() => Boolean(project && token && token.length >= 8), [project, token])
  const storageKey = `wk-preview-${project}`
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    if (!valid) return
    const existing = localStorage.getItem(storageKey)
    setComments(existing ? JSON.parse(existing) : [])
  }, [valid, storageKey])

  function addComment(text: string, pin: number) {
    const next = [...comments, { id: Math.random().toString(36).slice(2), text, pin }]
    setComments(next)
    localStorage.setItem(storageKey, JSON.stringify(next))
  }

  if (!valid) return <main className="container py-12"><h1 className="text-2xl font-semibold">Vorschau</h1><p className="mt-2 text-slate-700">Ungültiger Link. Bitte prüfen Sie Projekt und Token.</p></main>

  const mockImages = [
    '/images/preview/01.jpg',
    '/images/preview/02.jpg',
    '/images/preview/03.jpg'
  ]

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Projekt: {project}</h1>
      <p className="mt-1 text-sm text-slate-600">Token: {token?.slice(0, 4)}••••</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockImages.map((src, idx) => (
          <div key={src} className="rounded-lg border p-2">
            <div className="relative aspect-square overflow-hidden rounded">
              <Image src={src} alt={`Preview ${idx + 1}`} fill className="object-cover" />
            </div>
            <CommentBox imageId={src} comments={comments} onAdd={addComment} />
          </div>
        ))}
      </div>
    </main>
  )
}

function CommentBox({ imageId, comments, onAdd }: { imageId: string; comments: Comment[]; onAdd: (t: string, p: number) => void }) {
  const [text, setText] = useState('')
  const related = comments.filter(c => c.id.startsWith(imageId.slice(-4)))
  function submit() {
    if (!text.trim()) return
    onAdd(text.trim(), Date.now())
    setText('')
  }
  return (
    <div className="mt-3">
      <p className="text-sm font-medium">Kommentare</p>
      <ul className="mt-1 space-y-1 text-sm text-slate-700">
        {comments.map(c => (
          <li key={c.id} className="rounded bg-slate-50 p-2">{c.text}</li>
        ))}
      </ul>
      <div className="mt-2 flex gap-2">
        <input className="flex-1 rounded border px-2 py-1" placeholder="Kommentar anheften" value={text} onChange={e => setText(e.target.value)} />
        <button className="rounded bg-slate-900 px-3 text-white" onClick={submit}>Pin</button>
      </div>
    </div>
  )
}