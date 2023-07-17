function coneVolumeAndSurface(radius, height) {
    let h = Number(height);
    let r = Number(radius);
    // Volume
    let volume = 0;
    volume = (Math.PI * Math.pow(r,2) * h)/3;
    console.log(`volume = ${volume.toFixed(4)}`);

    // Total Surface Area
    let slantSurface = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let lateralSurface = Math.PI * r * slantSurface;
    let baseSurface = Math.PI * Math.pow(r, 2);
    let totalSurfaceArea = lateralSurface + baseSurface;
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}