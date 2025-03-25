import "./banner.css"

export default function Banner({ title }: { title: string }) {
  return (
    <div>
      <div style={{ paddingTop: "85px" }}>
        <div className="bg-banner">
          <h1 className="page-title"> {title} </h1>
        </div>
      </div>
    </div>
  )
}
