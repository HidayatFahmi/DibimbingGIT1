

export default function Maping(){
    const productAttribute = ["fahmi", "hidayat", 25, "single", "Bangka Belitung"];
    const blogObjectFromAPI = {
        id : "id",
        title : "Harry Potter",
        blogDetail : {
            day : 23,
            month : "desember",
            year : {
                number : 2023,
                versi : "masehi"
            }
        }
    }

    const {versi} = blogObjectFromAPI.blogDetail.year;

    return(
        <div>
           <div>
             {productAttribute.map((item, index) => (
               <p key={index}>{index+1}. {item}</p> 
            ))}
           </div>

           <div>
            {blogObjectFromAPI.blogDetail.year.number} {versi}
           </div>
        </div>
    )
}