# Gym-Light CRM

Gymlight Fitness CRM(Customer Relationship Management)

권한 차등 부여 : master, main-leader, team-leader, fc, (member)

## Router

/ -> Home
/join -> Join
/login -> Login
/account -> See Account
/:id/sales -> Sales
/:id/logout -> Log Out

## Center ID : 명지대점(mj), 서강대점(sk), 연희점(yh)

#### User

/:id/users -> See Users

<!-- /:id/users/logout -> Log out -->

/:id/users/edit -> Edit Users
/:id/users/upload -> Upload Users
/:id/users/lockers -> User Lockers
/:id/users/attend -> User Attendance

#### Trainer

/:id/trainers -> See Trainers
/:id/trainers/logout -> Log out
/:id/trainers/edit -> Edit Trainers
/:id/trainers/upload -> Upload Trainers
/:id/trainers/attend -> Trainers Attendance
/:id/trainers/schedule -> Trainers Schedule
