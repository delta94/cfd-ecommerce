import { NavLink, useParams } from "react-router-dom";
import getQueryString from "../getQueryString";
import FilterPrice from "./FilterPrice";

const style: { [key in string]: React.CSSProperties } = {
  menuActive: {
    fontWeight: 'bold'
  }
}

export default function FilterBar(props: { categories: any[] | null }) {
  let { categories } = props;

  let urlParams: any = useParams();




  return (
    <div className="filter--bar">
      <div className="filter--bar__item">
        <h2 className="title">Categories</h2>
        <ul>
          {
            categories?.map(e => <li key={e._id}>
              <NavLink to={`/the-loai/${e.slug}?${getQueryString(urlParams, { remove: { categories: 1, page: 1 } })}`} activeStyle={style.menuActive}>
                {e.title}
              </NavLink>{" "}
            </li>)
          }
          {/* 
          <li>
            <a href="#">
              {" "}
              Category name<span className="number">48</span>
            </a>{" "}
          </li> */}
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Brands</h2>
        <ul>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" defaultChecked />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" defaultChecked />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="small" name="size" />
              <label htmlFor="small" className="checkbox">
                Filter by brand item
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Rating</h2>
        <ul>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-5" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-4" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-3" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-2" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="field">
              <input type="checkbox" id="rating-1" name="size" />
              <div className="start--group">
                <span className="start--icon">
                  <img src="/assets/icon-star.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
                <span className="start--icon">
                  <img src="/assets/icon-star-none.svg" alt="" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="filter--bar__item">
        <h2 className="title">Price</h2>
        <FilterPrice />
      </div>
    </div>
  );
}
