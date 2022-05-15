const extarctDomainNameFormUrl = (url) => {
  const deleteProtocol = /(?:https?:\/\/)?(?:www.)?/g
  const getDomain = /\..*/g

  return url.replace(deleteProtocol, '').replace(getDomain, '')
}

// otra Forma de hacerlo

const extarctDomainNameFormUrl2 = (url) => {
  url =  new URL(url).host
  const getDomain = /\..*/g

  return url.replace(getDomain, '')
}

console.log(extarctDomainNameFormUrl("http://google.co.jp"))
console.log(extarctDomainNameFormUrl2("http://google.co.jp"))