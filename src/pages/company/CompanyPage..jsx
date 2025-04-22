import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { fetchAllCompanies } from "../../../redux/actions/companyAction";
import { Link } from "react-router-dom";
import "./CompanyPage.css";

const CompanyPage = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(null);

  const { companies, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchAllCompanies());
  }, [dispatch]);

  const handleFilterClick = (industry) => {
    setActiveFilter((prev) => (prev === industry ? null : industry));
  };

  const filteredCompanies = activeFilter
    ? companies.filter((company) => company.industry === activeFilter)
    : companies;

  const industries = [
    "AI",
    "Fintech",
    "Marketplace",
    "Transportation",
    "E-commerce",
    "Telecom",
    "Insuretech",
  ];

  return (
    <div className="company-page">
      <div className="company-page-hero">
        <h1>Discover South African Startups Driving Innovation</h1>
        <p>
          Browse our comprehensive directory of South African startups that are
          shaping the future. Explore their innovative products and the change
          they're creating.
        </p>
      </div>{" "}
      <div className="industry-filters">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`filter-button ${
              activeFilter === industry ? "active" : ""
            }`}
            onClick={() => handleFilterClick(industry)}
          >
            {industry}
            {activeFilter === industry && (
              <span className="remove-icon">
                <AiOutlineClose />
              </span>
            )}
          </button>
        ))}
      </div>
      {loading && <p>Loading companies...</p>}
      <div className="company-cards">
        {filteredCompanies?.length > 0
          ? filteredCompanies.map((company) => (
              <Link
                to={`/detail/${company._id}`}
                className="company-card-link"
                key={company._id}
              >
                <div className="company-card">
                  <div className="card-header">
                    <img
                      src={company.logo}
                      alt={`${company.companyName} Logo`}
                      className="company-logo"
                    />{" "}
                    <h2>{company.companyName}</h2>
                  </div>

                  <div className="card-content">
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
