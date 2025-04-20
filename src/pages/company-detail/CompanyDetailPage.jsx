import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

      <p>
        <strong>Description:</strong> {selectedCompany.description}
      </p>
      <p>
        <strong>About:</strong> {selectedCompany.about}
      </p>
      <p>
        <strong>Industry:</strong> {selectedCompany.industry}
      </p>
      <p>
        <strong>Location:</strong> {selectedCompany.city},{" "}
        {selectedCompany.province}
      </p>
      <p>
        <strong>Created In:</strong> {selectedCompany.companyCreationDate}
      </p>
      <p>
        <strong>Total Employees:</strong> {selectedCompany.totalEmployees}
      </p>
      <p>
        <strong>Total Fundings:</strong> $
        {selectedCompany.totalFundings.toLocaleString()}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={selectedCompany.websiteLink} target="_blank" rel="noreferrer">
          {selectedCompany.websiteLink}
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={selectedCompany.linkedinLink} target="_blank" rel="noreferrer">
          {selectedCompany.linkedinLink}
        </a>
      </p>

      <div>
        <strong>Founders:</strong>
        <ul>
          {selectedCompany.founders.map((founder, index) => (
            <li key={index}>
              <a href={founder.linkedinLink} target="_blank" rel="noreferrer">
                {founder.name} ({founder.role})
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
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
