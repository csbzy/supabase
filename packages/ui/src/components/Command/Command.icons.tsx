import { AiIconAnimation } from '@ui/layout/ai-icon-animation'
import React from 'react'

interface AiIconProps {
  className?: string
}

export const AiIcon = ({ className = 'text-brand-900 w-6 h-6' }: AiIconProps) => (
  <AiIconAnimation className="mr-2" />
  // <svg
  //   className={className}
  //   width="16"
  //   height="16"
  //   viewBox="0 0 16 16"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path
  //     d="M9.7003 13.379L8.33022 14.9739C7.99629 15.3626 7.35899 15.1265 7.35899 14.614V10.2188L2.13597 10.2188C1.20712 10.2189 0.693015 9.14211 1.277 8.4198L7.24456 1.03867C7.5719 0.633801 8.22633 0.865262 8.22633 1.3859V5.71008H13.7967C14.7348 5.71008 15.2458 6.80561 14.6431 7.52442L14.1628 8.09707"
  //     stroke="currentColor"
  //     strokeMiterlimit="10"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  //   <path
  //     d="M12.2534 14.3848L12.5765 13.4148C12.7202 12.9836 12.9624 12.5917 13.2839 12.2702C13.6053 11.9488 13.9972 11.7066 14.4285 11.5628L15.3984 11.2398C15.5808 11.179 15.5808 10.921 15.3984 10.8603L14.4285 10.5372C13.9972 10.3935 13.6053 10.1513 13.2839 9.8298C12.9624 9.50834 12.7202 9.11646 12.5765 8.68518L12.2534 7.71525C12.1927 7.53285 11.9347 7.53285 11.8739 7.71525L11.5509 8.68518C11.4071 9.11646 11.1649 9.50834 10.8435 9.8298C10.522 10.1513 10.1301 10.3935 9.69885 10.5372L8.72892 10.8603C8.54652 10.921 8.54652 11.179 8.72892 11.2398L9.69885 11.5628C10.1301 11.7066 10.522 11.9488 10.8435 12.2702C11.1649 12.5917 11.4071 12.9836 11.5509 13.4148L11.8739 14.3848C11.9347 14.5672 12.1927 14.5672 12.2534 14.3848Z"
  //     fill="currentColor"
  //   />
  // </svg>
)

export const AiIconChat = ({ loading = false }) => (
  <AiIconAnimation className="ml-0.5" loading={loading} />
  // <div
  //   className="w-7 h-7
  //   bg-gradient-to-r from-brand-900 to-brand-800

  //   ring-brand-600
  //   ring-1

  //   rounded-md border border-brand-400 flex items-center justify-center
  //   shadow-sm
  //   "
  // >
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth="1.5"
  //     stroke="currentColor"
  //     className="w-4 h-4 text-white"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
  //     />
  //   </svg>
  // </div>
)
