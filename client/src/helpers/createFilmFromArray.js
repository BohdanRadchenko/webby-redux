// import {useHttp} from '../hooks/http.hook'
// import {useMessage} from '../hooks/message.hook'
//
// const {request} = useHttp()
// const {message} = useMessage()
//
// export const createFilmFromArray = (array) => {
//
//   const fn = async (el) => {
//     const data = await request('/api/auth/films', 'POST', {...el})
//     message(data.message)
//   }
//   try {
//     array.map(el => {
//       fn(el)
//     })
//   } catch (e) {
//   }
//
// }