import Nav from "../../components/Nav";
import categories from "../../genres_api/romance_api.js";
import Row from "../../components/Row";
import Banner from "../../components/Banners_genders/Banner_romance.js";
import "./index.css"



function Romance() {
  return (
    <div className="Romance">
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row 
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
            tipo={category.tipo}
          />
        );
      })}
    </div>
  );
}

export default Romance;