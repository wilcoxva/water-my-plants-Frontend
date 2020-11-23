import React, { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        document.body.style.backgroundImage = "url('https://lh3.googleusercontent.com/u3i8NYFybuIxZRIcHwzPqhy-J1gTRG_v5ITjZxMFXVAwM5E90Cxxqb1vQo1Ydck7twb3tXiAOnqJ2G6JfAQJuVePCwOz5E919nqPZn5opYJ51eJD69AdpscUz97fsQkmWPWcoXjn_Zx8812iyCO4k64mPx8LeD6inWSQQfqMVnW3YyYZ_kuKFttxND9UotRkCfu8RModJtmZMfkdk2RuEr0TEahcD5Zt-GD91C_kIseyUkp-TXN3byiASt3GQ87zGQcACvSFFODTb27M5YyPBAi-dRnQwZBe8ZBIuCfPy4fudgQKy91VeGeFxmjJ73cEr8AdosBVHHg9XhvJz0BCT9WRbjDcHwgkMQyzPiydCvGPcoOK8uAdZt_jFQYX-yo6x8_iBQvIwhN0WJM7A4oFPIupwO8EEA52NQVAxaJHWftF3gsHZoOBFWJ-HSzkIKgmcIH7YU3j_u1fco3SvVtsTXjMeptQUvsE7pAqmQbRAyoej40LLuztDkgPaMBF_tAWLX8VrhpqZjGO4d-kfg0RNnvSOkEJ704hTnQJHrDtk72EIuZ0XSi9pDX-nghMUTMjSK9p726OH0YpJ9DPohLctvst3on2rqhrweRFPIIK5sqY7vgnH-T480vXKtZurlc2csqdN9LeDVDguYS2wc8Dx4P0IOqcHvlYWHxChx8boQHSlqMH-_H3H5reIhG-zw=w1321-h969-no?authuser=0')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }, []);

    return (
        <div className="about">
            <h1>Contact Water My Plants</h1>
        </div>
    )
};

export default Contact;
