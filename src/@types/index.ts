import { ReactNode } from "react"

export type IStatusObject = {
  title: string
  description: string
  withModal: boolean
  modalTitle?: string
  modalDesc?: string
  modalVideoUrl?: string
  modalCta?: string
  modalCtaLink?: string
  icon?: ReactNode
}

export type IStatuses = Record<string, IStatusObject>
