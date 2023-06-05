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
