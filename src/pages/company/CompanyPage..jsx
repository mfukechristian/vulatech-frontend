import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCompanies } from "../../../redux/actions/companyAction";
import { Link } from "react-router-dom";
import "./CompanyPage.css";

const CompanyPage = () => {
  const dispatch = useDispatch();

  const { companies, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchAllCompanies());
  }, [dispatch]);

  return (
    <div className="company-page">
      {loading && <p>Loading companies...</p>}
      {error && <p>Error: {error}</p>}

      <div className="company-cards">
        {companies?.length > 0
          ? companies.map((company) => (
              <Link
                to={`/detail/${company._id}`}
                className="company-card-link"
                key={company._id}
              >
                <div className="company-card">
                  <img
                    src={company.logo}
                    alt={`${company.companyName} Logo`}
                    className="company-logo"
                  />

                  <div className="card-content">
                    <h2>{company.companyName}</h2>
                    <p>{company.description}</p>
                  </div>
                </div>
              </Link>
            ))
          : !loading && <p>No companies found.</p>}
      </div>
    </div>
  );
};

export default CompanyPage;
