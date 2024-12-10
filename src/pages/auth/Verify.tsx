const Verify = () => {
  return (
     <main className="verify">
      <div className="verify_container">
        <img
          src="data:image/jpeg;base64,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"
          alt="verify"
        />
          <p>Please check your email to verify your account</p>
        </div>
    </main>
  );
};

export default Verify;
