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
  if (!selectedCompany) return <p>Company not found</p>;

  return (
    <div className="company-detail-page">
      <h1>{selectedCompany.companyName}</h1>
      <img
        src={selectedCompany.logo}
        alt={`${selectedCompany.companyName} Logo`}
        className="company-detail-logo"
      />
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
        <strong>Employees:</strong> {selectedCompany.totalEmployees}
      </p>
      <a href={selectedCompany.websiteLink} target="_blank" rel="noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default CompanyDetailPage;
