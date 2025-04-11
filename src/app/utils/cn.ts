export function cn(...args: any[]): string {
    const classNames: string[] = [];
  
    const addClass = (cls: any) => {
      if (!cls) return;
      if (typeof cls === "string") {
        classNames.push(cls);
      } else if (typeof cls === "object" && !Array.isArray(cls)) {
        for (const key in cls) {
          if (cls[key]) classNames.push(key);
        }
      } else if (Array.isArray(cls)) {
        cls.forEach(addClass);
      }
    };
  
    args.forEach(addClass);
  
    // Optional: remove duplicates
    return [...new Set(classNames)].join(" ");
  }
  