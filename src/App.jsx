





import data from "./Data";
import Header from "./components/Header";
import ArticleCard  from "./components/ArticleCard";



const App = () => {
  return (
    <div className="min-h-screen bg-blue-100 ">
      <Header/>
      {data.map((article)=>(
        <ArticleCard 
      key={article.id}
      img={article.img}
      title={article.title}
      country={article.country}
      googleMapsLink={article.googleMapsLink}
      dates={article.dates}
      text={article.text}
      />
      ))}
    </div>
   
  );
};



export default App;
