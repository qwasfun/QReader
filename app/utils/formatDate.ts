export function formatDate(date: Date, isShowTime: boolean = true) {
  const targetDate = new Date(date)
  if (isShowTime) {
    return targetDate.toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      timeZoneName: 'shortOffset',
    })
  }
  return targetDate.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Shanghai',
  })
}
