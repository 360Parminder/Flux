
const getUserInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    const initials = names.map(n => n.charAt(0).toUpperCase()).join("");
    return initials;
};
export default getUserInitials;