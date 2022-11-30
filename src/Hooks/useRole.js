import { useEffect, useState } from "react"

const useRole = (email) => {
    const [role, setRole] = useState('');
    const [isRoleLoading, setIsRoleLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRole(data.role);
                setIsRoleLoading(false);
            })
    }, [email])

    return [role, isRoleLoading];

}

export default useRole;