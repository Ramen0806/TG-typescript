//Enums

//-- Default Enum --//

enum UserResponse {
  No,
  Yes
}

//-- Numeric Enum --//

enum UserResponse1 {
  No = 0,
  Yes = 1
}

//-- String Enum --//

enum UserResponse2 {
  No = 'N0',
  Yes = 'YES'
}

//-- Heterogenous Enum --//

enum UserResponse3 {
  No = 1,
  Yes = 'YES'
}

//-- Example --//

interface User {
  id: number;
  name: string;
  status: userStatus;
}

enum userStatus {
  Inactive = 'Inactive',
   Active = 'Active',
   New = 'New User'
}

const primaryUser: User = {
  id: 1,
  name:'John',
  status: userStatus.Active
}


