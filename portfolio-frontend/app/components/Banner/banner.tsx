import "./banner.css"

export default function Banner({ title }: { title: string }) {
  return (
    <div>
      <div className="flex justify-center" style={{ paddingTop: "85px" }}>
        <p className="page-title font-extrabold">{title}</p>
      </div>
    </div>
  )
}
