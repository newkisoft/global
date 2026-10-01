# Project Setup

This project has two folders:

- `frontend/` — Angular frontend
- `backend/` — .NET backend

## Run the Frontend

Navigate to the `frontend/` folder and run:

```bash
ng serve
```

## Run the Backend

Navigate to the `backend/` folder and run:

```bash
dotnet restore
dotnet run
```

You may need to run `dotnet restore` first to restore the required packages.

## Access the Website

Once both the frontend and backend are running, you can access the website at:

http://localhost:4200/