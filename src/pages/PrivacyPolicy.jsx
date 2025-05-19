import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="main">
      <div className="privacyBG p-3">
        <header>
          <div className="container   custom-container">
            <NavBar />
          </div>
        </header>

        {/* <div className="container custom-container"> */}
        <div className="privacySection position-relative mt-5 mb-5">
          <div className="container">
            <h2 className="font-geist headingPrivacyPage">Privacy Policy</h2>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="container mb-5 mt-3 pb-5">
        <h1>SAITARESILIA PRIVACY POLICY</h1>
        <h3 className="my-3"> Last Updated on: 15-03-2025</h3>
        <p>
          SaitaResilia ("SaitaResilia," "we," "us," or "our") is committed to
          safeguarding the privacy and security of our users ("you," "your," or
          "user"). This Privacy Policy (the "Policy") outlines the types of
          information we collect, how we process and use that information, and
          the rights available to users regarding their personal data. We value
          and respect your right to privacy, and to this, we are committed to
          protecting your Data provided to us directly or indirectly. This
          Policy sets out our commitment and explains in detail what information
          we may gather from your visit to our <a href="https://rezor.org/" >Rezor.org</a> (the "Website" or
          "Platform") and, why and how your information may be processed when
          you use our Services.
          <p className="pt-2">
            {" "}
            By using our decentralized application (dApp) and associated
            services, including Rezor Wallet and RezorSwap (collectively, the
            "Services"), you acknowledge and consent to the collection, use, and
            disclosure of your information as described herein. This Policy is
            drafted in accordance with the applicable data protection
            regulations of the Cayman Islands and international best practices
            for data privacy. This Policy supplements but does not supersede nor
            replace any other consent which you may have previously provided to
            us nor does it affect any rights that we may have at law in
            connection with the collection, use and/or disclosure of your data.
            We may from time to time update this Policy to ensure that this
            Policy is consistent with our future developments, industry trends
            and/or any changes in legal or regulatory requirements. Subject to
            your rights at law, the prevailing terms of this Policy shall apply.
            For the avoidance of doubt, this Policy forms part of the Terms and
            Conditions governing your relationship with us and should be read in
            conjunction with such Terms and Conditions (attached the link
            below). The terms of this Policy are applicable to you for accessing
            our various Services as detailed in our Terms and Conditions
            document that can be accessed through the Website and is available
            at <a href="/termsandconditions" target="_blank"  >Terms & Conditions</a>
          </p>
        </p>
        <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">1)</span>Information We Collect
          </h3>
          <p>
            As a decentralized application, SaitaResilia operates in a manner
            that does not require the collection of traditional personal data
            such as names, email addresses, or phone numbers. However, to ensure
            the functionality, security, and efficiency of our Services, we may
            collect certain categories of information that are necessary for the
            proper operation of the platform.
          </p>

          <div className="my-3">
            <h6>
              <span className="me-3 fw-bold">a)</span>Payment and Transaction
              Information
            </h6>
            <p>
              We collect and process cryptocurrency transaction details,
              including amounts, wallet addresses, and transaction hashes. These
              details are stored on the blockchain and are publicly accessible
              as part of the decentralized ledger system. While these records
              provide transparency for blockchain transactions, they do not
              inherently contain personally identifiable information unless the
              user has linked their wallet address to external data sources.
            </p>
          </div>
          <div className="my-3">
            <h6>
              <span className="me-3 fw-bold">b)</span>Device and Usage Information
            </h6>
            <p>
            When users interact with our Services, we may collect certain technical data, including device type, operating system version, mobile network data, and IP address. This information is collected automatically to enhance user experience, troubleshoot technical issues, and improve the overall functionality of our platform. Additionally, we may employ analytics tools to understand user behavior and optimize the performance of our Services.
            </p>
          </div>
          <div className="my-3">
            <h6>
              <span className="me-3 fw-bold">c)</span>Wallet Service Information
            </h6>
            <p>
Rezor Wallet operates as a non-custodial wallet, meaning we do not store users’ private keys, seed phrases, or wallet credentials. Users maintain full control over their assets and keys. However, we may collect:            </p>
                <p> <span className="me-3 fw-bold">i)</span><span className="fw-bold">Wallet addresses</span> for transaction processing and support purposes. </p>
                <p> <span className="me-3 fw-bold">ii)</span> 
<span className="fw-bold">Device and browser information</span> to optimize wallet functionality. </p>
                <p> <span className="me-3 fw-bold">iii)</span>
<span className="fw-bold">Interaction data</span> related to in-app features and settings to enhance the user experience</p>
          </div>
          <div className="my-3">
            <h6>
              <span className="me-3 fw-bold">d)</span>Anonymized and Aggregated Data

            </h6>
            <p>
            To better serve our users, we may collect anonymized and aggregated data that does not personally identify any individual. This data may include general usage statistics, interaction trends, and other analytical insights used to refine and develop our Services further. Aggregated data may be shared with third parties for research, statistical analysis, or other lawful purposes.            </p>
          </div>
        </div>
        <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">2)</span>How We Collect Your Information
          </h3>
          <p>The information we collect is obtained through multiple methods to ensure seamless service delivery while maintaining user privacy:
          </p>

          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">a)</span> <span className="fw-bold">Direct User Interaction: </span> Information such as wallet addresses and transaction details are directly provided by users when they execute transactions or interact with various features of the application.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">b)</span> <span className="fw-bold">Automated Collection: </span> Certain device and usage data are collected automatically through our Services' built-in analytics tools, helping us diagnose technical issues and enhance performance.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">c)</span> <span className="fw-bold">Third-Party Integrations: </span> In some cases, we may receive transaction-related information from third-party service providers, such as payment processors or blockchain networks, to facilitate cryptocurrency transactions.
            </p> 
          </div>
        </div>

          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">3)</span>Legal Basis for Processing Personal Data
          </h3>
          <p>We rely on the following legal bases for processing personal data:
          </p>

          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">a)</span> <span className="fw-bold">Contractual Necessity </span>  Processing is necessary for the performance of a contract with the user, such as enabling transactions.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">b)</span> <span className="fw-bold">Legitimate Interests: </span>We process data to improve security, prevent fraud, and enhance user experience, provided such processing does not override users' rights.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">c)</span> <span className="fw-bold">Compliance with Legal Obligations: </span> Certain data processing is necessary to meet regulatory and compliance requirements under applicable Cayman Islands laws.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">d)</span> <span className="fw-bold">User Consent: </span> Where required, we obtain explicit consent before processing sensitive personal data.
            </p> 
          </div>
          </div>

          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">4)</span>Data Transfers and Storage
          </h3>
          <p>SaitaResilia does not transfer personal data outside its jurisdiction of incorporation unless permitted under applicable laws. Since our platform operates on blockchain technology, transaction data is recorded in a decentralized manner across the blockchain network. While this information remains immutable and publicly accessible, it does not contain identifiable personal details unless users voluntarily disclose such information in external forums or services. SaitaResilia ensures that any third-party services it integrates comply with industry-standard security measures and relevant data protection regulations.
          </p>
          </div>

          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">5)</span>Data Retention
          </h3>
          <p>SaitaResilia follows a data retention policy aligned with industry best practices and regulatory requirements:
          </p>

          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">a)</span> <span className="fw-bold">Usage Data: </span> Retained for analytical purposes and performance improvement. Such data is periodically reviewed and deleted when no longer necessary.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">b)</span> <span className="fw-bold">Blockchain Transactions: </span>As an inherent feature of blockchain technology, transaction data is stored permanently on the blockchain and cannot be altered or erased.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">c)</span> <span className="fw-bold">Wallet Data: </span> As a non-custodial wallet, we do not store private keys, seed phrases, or wallet credentials. Users are solely responsible for securing their wallet information.
            </p> 
          </div>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">6)</span>User Rights
          </h3>
          <p>Users retain the following rights:
          </p>

          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">a)</span> <span className="fw-bold">Right to Access: </span>  Users can request a copy of their personal data.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">b)</span> <span className="fw-bold">Right to Rectification: </span>Users can request corrections to inaccurate data.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">c)</span> <span className="fw-bold">Right to Erasure: </span> Users may request deletion of off-chain personal data.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">d)</span> <span className="fw-bold">Right to Restriction: </span> Users can restrict certain types of data processing.
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">e)</span> <span className="fw-bold">Right to Object: </span> Users can object to processing based on legitimate interests.              .
            </p> 
          </div>
          <div className="my-3">
            <p>
              <span className="me-3 fw-bold">f)</span> <span className="fw-bold">Right to Data Portability:</span> Users can request their data in a structured, machine-readable format.
            </p> 
          </div>
          <p>Users can exercise their rights by contacting us at <span className="fw-bold">support@rezor.org</span>
          </p>
          </div>

          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">7)</span>Data Transfers and Storage
          </h3>
          <p>SaitaResilia does not transfer personal data outside its jurisdiction of incorporation unless permitted under applicable laws. Since our platform operates on blockchain technology, transaction data is recorded in a decentralized manner across the blockchain network. While this information remains immutable and publicly accessible, it does not contain identifiable personal details unless users voluntarily disclose such information in external forums or services. SaitaResilia ensures that any third-party services it integrates comply with industry-standard security measures and relevant data protection regulations.
          </p>
          </div>

          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">8)</span>Third-Party Links and Services
          </h3>
          <p>Our Services may contain links to third-party websites or services. SaitaResilia is not responsible for their data collection practices and advises users to review third-party privacy policies before engaging with them.
          </p>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">9)</span>Governing Law
          </h3>
          <p>This Policy shall be governed and interpreted in accordance with the laws of the Cayman Islands. Any disputes arising from this policy or the use of our Services shall be subject to the exclusive jurisdiction of the courts in the Cayman Islands.</p>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">10)</span>Children’s Information
          </h3>
          <p>The Services are not directed to children under 18 years (or other age as required by local law), and we do not knowingly collect personal information from children. If you learn that your child has provided us with personal information without your consent, you may contact us as set forth in “Contact Us” below. If we learn that we have collected a child’s personal information in violation of applicable law, we will promptly take steps to delete such information.
          </p>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">11)</span>Security of your Information
          </h3>
          <p>We take steps designed to ensure that your information is treated securely and in accordance with this Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure. By using our Services or providing information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail or by sending an email to you. </p>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">12)</span>Changes to This Privacy Policy
          </h3>
          <p>This Policy may be revised from time to time, as indicated by the “Last Updated” date at the beginning of this Policy. Updates may be made to reflect changes in features, security enhancements, or regulatory compliance. Users will be informed of any significant modifications through website or official communication channels. By continuing to use the platform, users acknowledge and accept the revised terms as they apply to the Services.</p>
          </div>
          <div>
          <h3 className="my-3 ">
            <span className="me-3 fw-bold">13)</span>Contact Us
          </h3>
          <p>For any inquiries regarding this Policy, users may contact our <span className="fw-bold">Data Protection Officer (DPO)</span> at: <span className="fw-bold">Email: support@rezor.org </span></p>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
