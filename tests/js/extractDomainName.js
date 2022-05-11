const extarctDomainNameFormUrl = (url) => {
  const deleteProtocol = /(?:https?:\/\/)?(?:www.)?/g
  const getDomain = /\..*/g

  return url.replace(deleteProtocol, '').replace(getDomain, '')

}

console.log(extarctDomainNameFormUrl("http://google.co.jp"))