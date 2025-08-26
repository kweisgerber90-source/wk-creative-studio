"use client"
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Bitte Namen angeben'),
  email: z.string().email('Gültige E‑Mail angeben'),
  project: z.string().min(3, 'Bitte Projektdetails angeben'),
})

type FormValues = z.infer<typeof schema>

export default function BriefPage() {
  const mode = process.env.NEXT_PUBLIC_BRIEF_MODE || 'external' // 'external' | 'mock'
  const externalUrl = process.env.NEXT_PUBLIC_BRIEF_EXTERNAL_URL
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const [success, setSuccess] = useState<string | null>(null)

  const onSubmit = async (values: FormValues) => {
    setSuccess(null)
    if (mode === 'external' && externalUrl) {
      const url = new URL(externalUrl)
      url.searchParams.set('name', values.name)
      url.searchParams.set('email', values.email)
      url.searchParams.set('project', values.project)
      window.location.href = url.toString()
      return
    }
    const res = await fetch('/api/brief', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
    if (res.ok) {
      setSuccess('Danke! Wir melden uns in Kürze mit der 24h‑Vorschau.')
      reset()
    }
  }

  return (
    <main className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight">Brief</h1>
      <p className="mt-2 text-slate-700">Erzählen Sie uns kurz von Ihrem Produkt und Ziel. Wir bestätigen den Wareneingang und senden innerhalb von 24h eine Vorschau.</p>
      {success && <p className="mt-4 rounded bg-green-50 p-3 text-green-700">{success}</p>}
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input className="rounded border px-3 py-2" {...register('name')} />
          {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">E‑Mail</span>
          <input className="rounded border px-3 py-2" type="email" {...register('email')} />
          {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Projekt / Anforderungen</span>
          <textarea className="rounded border px-3 py-2" rows={6} {...register('project')} />
          {errors.project && <span className="text-sm text-red-600">{errors.project.message}</span>}
        </label>
        <button disabled={isSubmitting} className="h-10 rounded-md bg-slate-900 px-4 font-medium text-white hover:bg-slate-800 disabled:opacity-50">Senden</button>
      </form>
    </main>
  )
}