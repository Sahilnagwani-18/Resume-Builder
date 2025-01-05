// global.d.ts
declare global {
    var mongoose: {
      conn: typeof import("mongoose") | null;
      promise: Promise<typeof import("mongoose")> | null;
    };
  }
  
  // This ensures the file is treated as a module
  export {};
  