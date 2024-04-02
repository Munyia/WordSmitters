import React from "react";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-sec  justify-center h-screen">
        <div className="w-full max-w-md">
          <div className="bg-pry shadow-inner rounded-full bg-blend-hard-light opacity-60 relative px-8 pt-6 pb-8 mb-4">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-sec">
                Registration Successful!
              </h1>
            </div>
            <div className="text-center">
              <p className="text-sec text-sm">
                Your account has been successfully created.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
