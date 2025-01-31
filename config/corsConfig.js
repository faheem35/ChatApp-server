const corsOptions = {
          origin: "http://localhost:5173", // Frontend URL
          methods: ["GET", "POST"],
          allowedHeaders: ["Content-Type"],
        };
        
        module.exports = corsOptions;
        