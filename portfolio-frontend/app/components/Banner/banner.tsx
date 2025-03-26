import "./banner.css"

export default function Banner({ title }: { title: string }) {
  return (
    <div>
      <div
        className="flex justify-center "
        style={{ paddingTop: "85px", backgroundColor: "black" }}
      >
        <p className="page-title font-extrabold text-transparent bg-fixed">
          {title}
        </p>
      </div>
    </div>
  )
}
