//jshint esversion:6
//MODULE is an OBJECT
  exports.getDate = () =>{
  const options = { weekday: 'short',
  month: 'long',
  day: 'numeric'}
  return  new Date().toLocaleDateString('ja-JP',options)
}


  exports.getDay = () => {
  const options = { weekday: 'long',
  }

  return new Date().toLocaleDateString('ja-JP',options)
}
