import {Head, Html, Main, NextScript} from "next/document"
import {ColorModeScript} from "@chakra-ui/react"
export default function Document() {
return (
<Html><Head/>
<body><ColorModeScript initialColorMode="light"/>
<Main/>
<NextScript/></body></Html>
)
}