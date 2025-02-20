import { useState } from "react";
import withToggles, { List } from "./hoc";
import { faker } from "@faker-js/faker";

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

const ProductList = ({ items }) => {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
};

const CompaniesList = ({ items }) => {
  return (
    <ul className="list">
      {items.map((company) => (
        <CompanyItem key={company.productName} company={company} />
      ))}
    </ul>
  );
};

const ProductListWithToggles = withToggles(ProductList);
const CompaniesListWithToggles = withToggles(CompaniesList);

export default function Warehouse() {
  return (
    <div>
      <h1>Warehouse</h1>
      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => {
            return <ProductItem product={product} />;
          }}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => {
            return <CompanyItem company={company} />;
          }}
        />
      </div>
      <div className="col-2">
        <ProductListWithToggles title="Products" items={products} />
        <CompaniesListWithToggles title="Companies" items={companies} />
      </div>
    </div>
  );
}
