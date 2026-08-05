# API v2 Endpoints

## Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v2/auth/login | User login |
| POST | /api/v2/auth/refresh | Refresh JWT token |
| POST | /api/v2/auth/logout | Invalidate session |

## Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v2/users | List users (paginated) |
| GET | /api/v2/users/:id | Get user by ID |
| PATCH | /api/v2/users/:id | Update user profile |
| DELETE | /api/v2/users/:id | Deactivate user |

## Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v2/projects | List projects |
| POST | /api/v2/projects | Create project |
| GET | /api/v2/projects/:id/metrics | Get project metrics |

## Rate Limits
- 100 requests per minute per user
- 1000 requests per hour per organization
