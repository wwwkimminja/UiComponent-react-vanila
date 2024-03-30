import { useEffect, useRef } from "react"

const VanillaWrapper = ({ title, initiator }: { title: string, initiator: (wrapper: HTMLDivElement) => void }) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const isInit = useRef(false)

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true
    }
  }, [initiator])

  return (
    <>
      <h3>{title}.Vanilla</h3>
      <div ref={wrapper} />
    </>
  )
}
export default VanillaWrapper;