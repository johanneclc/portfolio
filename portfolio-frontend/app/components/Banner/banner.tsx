import './banner.css';

export default function Banner({title}: {title: string}) {
    
      return (
            <div className="bg-banner">
              <h1 className='page-title'> {title} </h1>
            </div>
      )
}