#!/usr/bin/env python3

from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
async def root():
    return HTMLResponse(content="Hello from Turing platform")

@app.get("/api/hello")
async def hello():
    return {"message": "Hello from Turing platform"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)


