import React, { useMemo } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';


function User() {

  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const userIcon = useMemo(() => {
    let email = user?.attributes?.email || "";
    if (email) {
      email = email.split('@')[0];
      email = email.replace(/[^a-zA-Z]+/g, '');
      return `${email.charAt(0).toUpperCase() || ""}${email.charAt(1).toUpperCase() || ""}`;
    }
    return "";
  }, [user]);

  return (
    <div className="flex flex-row justify-end items-center">
      <button
        className="bg-transparent text-sm text-brandDark-100 cursor-pointer mr-3"
        type="button"
        onClick={signOut}
      >
        Cerrar Sesión
      </button>
      {!!userIcon && (
        <div className="flex justify-center items-center rounded-full bg-brandDark-800 text-xl font-bold w-12 h-12">
          {userIcon}
        </div>
      )}
    </div>
  );
}

export default User;
