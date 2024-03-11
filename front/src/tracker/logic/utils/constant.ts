import authConfig from 'src/configs/auth'

export const getHeadersInformation = () => {
  const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!

  if (storedToken) {
    return {
      'x-access-token': `${storedToken}`
    }
  }

  return {}
}

export const formatDateTime = (date: string | Date) => {
  const dateF = new Date(date)
  let month: any = dateF.getMonth() + 1

  month = month < 10 ? `0${month}` : month
  const day = dateF.getDate() < 10 ? `0${dateF.getDate()}` : dateF.getDate()
  const hours = dateF.getHours() < 10 ? `0${dateF.getHours()}` : dateF.getHours()
  const minute = dateF.getMinutes() < 10 ? `0${dateF.getMinutes()}` : dateF.getMinutes()
  const seconde = dateF.getSeconds() < 10 ? `0${dateF.getSeconds()}` : dateF.getSeconds()

  return `${dateF.getFullYear()}-${month}-${day} ${hours}:${minute}:${seconde}`
}

export const getDateAsString = (date: Date | string) => {
  const myDate = new Date(date);

  const year = myDate.getFullYear();
  const month = (myDate.getMonth() + 1).toString().padStart(2, '0');
  const day = myDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const get2Date = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);

  startDate.setDate(startDate.getDate() - 30);

  return {
    endDate,
    startDate
  }
}

export const differenceDateInferieureA30Jours = (date1: Date | string, date2: Date | string): boolean => {
  const date1Obj = date1 instanceof Date ? date1 : new Date(date1);
  const date2Obj = date2 instanceof Date ? date2 : new Date(date2);

  const differenceEnMillisecondes = Math.abs(date2Obj.getTime() - date1Obj.getTime());

  const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  return differenceEnJours <= 30;
}
