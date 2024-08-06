const domainName = (url) => {
  const getHostName = url?.replace(/(?:https?:\/\/)|(?:www\.)/g, '')
  const getDomainName = getHostName?.replace(/[.].*/g, '')

  return getDomainName
}

domainName('www.xakep.ru')