import React from "react"
import { useExtractDomain } from "../../utils/Hooks"
import Icon from "./Icon"
import ButtonLink from "../button/ButtonLink"

export default ({ name = null, url = null, ...props }) => {
  const domain = useExtractDomain(url)
  return (
    url && (
      <ButtonLink icon={<Icon name={domain} />} url={url} external {...props} />
    )
  )
}
