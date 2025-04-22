import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { fetchCompanyById } from "../../../redux/actions/companyAction";
import "./CompanyDetailPage.css";

const CompanyDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedCompany, loading, error } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCompanyById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading company details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedCompany) return null;

  return (
    <div className="company-detail-page">
      <h1>{selectedCompany.companyName}</h1>

      <img
        src={selectedCompany.logo}
        alt={`${selectedCompany.companyName} Logo`}
        className="company-detail-logo"
      />

      <div className="company-identifier">
        <div className="industry-tag">{selectedCompany.industry}</div>
        <div className="company-socials">
          {" "}
          <a
            href={selectedCompany.websiteLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
          </a>
          <a
            href={selectedCompany.linkedinLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p>{selectedCompany.about}</p>

      <p>
        <strong>Location:</strong> {selectedCompany.city},{" "}
        {selectedCompany.province}
      </p>
      <p>
        <strong>Founded:</strong> {selectedCompany.companyCreationDate}
      </p>
      <p>
        <strong>Company size:</strong> {selectedCompany.totalEmployees}
      </p>
      <p>
        <strong>Total Public Fundings:</strong>{" "}
        {selectedCompany.totalFundings === 0
          ? "Undisclosed"
          : `$${selectedCompany.totalFundings.toLocaleString()}`}
      </p>

      <div className="founders">
        {" "}
        <strong>Founders:</strong>
        <ul>
          {selectedCompany.founders.map((founder, index) => (
            <li key={index}>
              <a href={founder.linkedinLink} target="_blank" rel="noreferrer">
                {founder.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="investors">
        <strong>Investors:</strong>
        <ul>
          {selectedCompany.investors.map((investor, index) => (
            <li key={index}>
              <a href={investor.websiteUrl} target="_blank" rel="noreferrer">
                {investor.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
