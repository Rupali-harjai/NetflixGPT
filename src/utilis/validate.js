export const checkValidData =(email,password,fullName,phoneNumber) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isFullNameValid = /^[A-Z][a-zA-Z-' ]+$/.test(fullName);
    const isPhoneNumberValid = /^\+?[1-9][0-9]{7,14}$/.test(phoneNumber);

    if(!isEmailValid) return 'Email ID is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    if(!isFullNameValid) return 'Full Name is not valid';
    if(!isPhoneNumberValid) return 'Phone Number is not valid';

    return null;
}