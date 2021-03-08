/** Types
 * Tuples
 * Enums
 * any
 */

enum Role { ADMIN='ADMIN', READ_ONLY='READ_ONLY', AUTHOR='AUTHOR' }; // Enum type

const person2: {
    name: string;
    roles: [number, string]; // Tuple Type
    role: string,
    hobbies: any
} = {
    name: 'Shalva',
    roles: [2, 'admin'],
    role: Role.AUTHOR,
    hobbies: ['Sports', 'Guitar', 2]
};

console.log(person2.role)