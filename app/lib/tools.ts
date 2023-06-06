import { toast} from 'react-hot-toast'
export const getCurrentTime = ()=> {
  const date = new Date()
  const dateString = date
    .toLocaleString('zh', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    .replace(/\//g, '-')
  return dateString
}

export function prettyObject(msg: any) {
  const obj = msg
  if (typeof msg !== 'string') {
    msg = JSON.stringify(msg, null, '  ')
  }
  if (msg === '{}') {
    return obj.toString()
  }
  if (msg.startsWith('```json')) {
    return msg
  }
  return ['```json', msg, '```'].join('\n')
}

export function merge(target: any, source: any) {
  Object.keys(source).forEach(function (key) {
    if (source[key] && typeof source[key] === 'object') {
      merge((target[key] = target[key] || {}), source[key])
      return
    }
    target[key] = source[key]
  })
}
export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success('Copy Success')
  } catch (error) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      toast.success('Copy Success')
    } catch (error) {
      toast.error('Copy Failed')
    }
    document.body.removeChild(textArea)
  }
}