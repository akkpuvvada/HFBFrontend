import moment from 'moment'

export const getGeneralDate = (date) => {
  const dateFormat = 'D MMM, YY' // 1 May, 97
  return moment(date).format(dateFormat)
}
