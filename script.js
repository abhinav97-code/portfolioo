const planetDetails = {
    sun: {
        badge: "☀️ SUN — EXECUTIVE & PROFESSIONAL SUMMARY",
        html: `
            <h2>Executive Summary</h2>
            <p>Entry-level <strong>BCA Graduate (June 2026)</strong> skilled in <strong>Java, JavaScript, Node.js, MySQL, MongoDB, and MS Excel</strong>.</p>
            <div class="detail-box">
                <h3>🔍 Data Verification & Validation</h3>
                <p>Experienced through projects in logging, verifying, categorizing, and tracking records, building structured verification logic, and running functional testing and data validation checks to keep data accurate and reliable.</p>
            </div>
            <div class="detail-box">
                <h3>🎯 Career Objective & Target Roles</h3>
                <p>Strong in attention to detail, following guidelines, documentation, and meeting deadlines. Seeking a remote or work-from-home role as an <strong>Associate, Analyst, Data Verification Specialist, Content Reviewer, Operations Executive, Support, or Junior Developer</strong>; open to rotational shifts.</p>
            </div>
        `
    },
    earth: {
        badge: "🌍 EARTH — TECH STACK & CORE COMPETENCIES",
        html: `
            <h2>Core Competencies & Technical Stack</h2>
            <div class="detail-box">
                <h3>💻 Programming & Web Development</h3>
                <p>Java, JavaScript, Node.js, HTML5, CSS3, Three.js, Data Structures, Git, GitHub, VS Code, Functional Testing</p>
            </div>
            <div class="detail-box">
                <h3>🗄️ Databases & Querying</h3>
                <p>MySQL (SQL, Query Optimization, Indexing, Relational Schema Design), MongoDB (CRUD Operations), DBMS</p>
            </div>
            <div class="detail-box">
                <h3>📊 Analysis & Reporting</h3>
                <p>MS Excel (Sorting, Filtering, Formulas), Data Analysis, Analytical Thinking, Administrative Reporting, Data Categorization, Research & Information Gathering</p>
            </div>
            <div class="detail-box">
                <h3>✅ Data Verification & Operations</h3>
                <p>Data Verification, Data Validation, Accuracy Checks, Quality Review, Error Checking, Record Keeping, Records Management, Booking Workflow Automation, Confidentiality</p>
            </div>
        `
    },
    mars: {
        badge: "🔴 MARS — FEATURED PROJECTS",
        html: `
            <h2>Featured Software & Web Projects</h2>
            <div class="detail-box">
                <h3>1. Hotel Purvanchal - Management & Tracking System</h3>
                <span class="tag-pill">Java | MySQL / Data Structures</span>
                <p>• Built a full-stack desktop application to automate front-desk booking workflows and record verification.</p>
                <p>• Optimized data structures and record lookup logic, reducing record lookup latency and improving administrative reporting accuracy.</p>
            </div>
            <div class="detail-box">
                <h3>2. Digital Lost & Found Hub</h3>
                <span class="tag-pill">JavaScript | Node.js | Web Technologies</span>
                <p>• Developed a centralized web platform for logging, categorizing, and tracking lost and found items with structured verification logic.</p>
                <p>• Conducted functional testing and data validation checks to ensure data integrity, reliability, and smooth user claim resolution.</p>
            </div>
        `
    },
    saturn: {
        badge: "🪐 SATURN — EDUCATION & CERTIFICATIONS",
        html: `
            <h2>Academic Qualifications & Certifications</h2>
            <div class="detail-box">
                <h3>🎓 Bachelor of Computer Applications (BCA) — 71.25%</h3>
                <p>Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh | <strong>June 2026</strong></p>
            </div>
            <div class="detail-box">
                <h3>🏫 Intermediate (12th) — 64.00%</h3>
                <p>Ramavati Inter College, Phinihinee, Azamgarh, Uttar Pradesh | <strong>June 2022</strong></p>
            </div>
            <div class="detail-box">
                <h3>🏫 High School (10th) — 67.00%</h3>
                <p>Central Public School, Jaffarpur, Azamgarh, Uttar Pradesh | <strong>July 2020</strong></p>
            </div>
            <div class="detail-box">
                <h3>📜 Certifications & Training</h3>
                <p>• <strong>MongoDB from Zero to CRUD:</strong> Hands-on Database Workshop — GUVI HCL (Credential ID: 1217400T71i7v7Z65F)</p>
                <p>• <strong>Professional Networking & Workplace Communication</strong> — HP LIFE</p>
            </div>
        `
    },
    moon: {
        badge: "🌙 MOON — WORK STYLE, STRENGTHS & LANGUAGES",
        html: `
            <h2>Work Style, Communication & Languages</h2>
            <div class="detail-box">
                <h3>🤝 Professional Work Style</h3>
                <p>Written and Verbal Communication, Teamwork, Independent Remote Work, Time Management, Working to Deadlines, Quick Learner, Open to Rotational Shifts.</p>
            </div>
            <div class="detail-box">
                <h3>🗣️ Languages Known</h3>
                <p><strong>English</strong> (Professional Working Proficiency) & <strong>Hindi</strong> (Native / Bilingual Proficiency)</p>
            </div>
            <div class="detail-box">
                <h3>📍 Location & Availability</h3>
                <p>Based in <strong>Azamgarh, Uttar Pradesh, India</strong> — Immediately available for Remote / Work-From-Home opportunities.</p>
            </div>
        `
    }
};

function openPlanetModal(planetKey) {
    const data = planetDetails[planetKey];
    if (!data) return;
    document.getElementById('modal-badge').innerHTML = data.badge;
    document.getElementById('modal-content').innerHTML = data.html;
    document.getElementById('planet-modal-overlay').classList.add('open');
}

function closePlanetModal(event) {
    if (event.target.id === 'planet-modal-overlay') {
        forceCloseModal();
    }
}

function forceCloseModal() {
    document.getElementById('planet-modal-overlay').classList.remove('open');
}

// =========================================================
// 3D SCENE SETUP (With Safe Error Handling)
// =========================================================
try {
    const canvas = document.querySelector('#universe-canvas');
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 350);

    function adjustCameraForScreen() {
        if (window.innerWidth <= 900) {
            camera.position.set(0, 8.2, 23.5);
            camera.lookAt(0, 0.8, 0);
        } else {
            camera.position.set(0, 7.2, 16.5);
            camera.lookAt(0, 1.8, 0);
        }
    }
    adjustCameraForScreen();

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    const sunPointLight = new THREE.PointLight(0xffdd88, 3.2, 90);
    sunPointLight.position.set(0, 0, 0);
    scene.add(ambientLight, sunPointLight);

    // Stars
    const starCount = 6000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i]     = (Math.random() - 0.5) * 90;
        starPos[i + 1] = (Math.random() - 0.3) * 50;
        starPos[i + 2] = -10 - Math.random() * 60;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.85 });
    const deepStars = new THREE.Points(starGeo, starMat);
    scene.add(deepStars);

    // Milky Way Galaxy
    const galaxyCount = 22000;
    const galaxyGeo = new THREE.BufferGeometry();
    const galaxyPos = new Float32Array(galaxyCount * 3);
    const galaxyColors = new Float32Array(galaxyCount * 3);

    const colorInner = new THREE.Color('#ffaa55');
    const colorOuter = new THREE.Color('#3b82f6');

    for (let i = 0; i < galaxyCount; i++) {
        const i3 = i * 3;
        const radius = 5 + Math.random() * 28;
        const spinAngle = radius * 0.45;
        const branchAngle = ((i % 4) / 4) * Math.PI * 2;

        const rx = (Math.random() - 0.5) * 3.5;
        const ry = (Math.random() - 0.5) * 1.8 - 2.5;
        const rz = (Math.random() - 0.5) * 3.5;

        galaxyPos[i3]     = Math.cos(branchAngle + spinAngle) * radius + rx;
        galaxyPos[i3 + 1] = ry;
        galaxyPos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rz;

        const mixed = colorInner.clone().lerp(colorOuter, (radius - 5) / 28);
        galaxyColors[i3]     = mixed.r;
        galaxyColors[i3 + 1] = mixed.g;
        galaxyColors[i3 + 2] = mixed.b;
    }

    galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPos, 3));
    galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));

    const galaxyMat = new THREE.PointsMaterial({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const galaxy = new THREE.Points(galaxyGeo, galaxyMat);
    scene.add(galaxy);

    // Black Hole
    const blackHoleGroup = new THREE.Group();
    const bhCore = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    const bhDisk1 = new THREE.Mesh(
        new THREE.RingGeometry(1.25, 2.7, 64),
        new THREE.MeshBasicMaterial({ color: 0xff8800, side: THREE.DoubleSide, transparent: true, opacity: 0.78 })
    );
    bhDisk1.rotation.x = Math.PI / 2.6;

    const bhDisk2 = new THREE.Mesh(
        new THREE.RingGeometry(1.18, 1.85, 64),
        new THREE.MeshBasicMaterial({ color: 0xfde047, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
    );
    bhDisk2.rotation.y = 0.3;

    blackHoleGroup.add(bhCore, bhDisk1, bhDisk2);
    blackHoleGroup.position.set(11.5, 6.8, -8.0);
    scene.add(blackHoleGroup);

    // Nebula
    const nebulaCount = 1800;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    const nebulaCol = new Float32Array(nebulaCount * 3);
    const nebC1 = new THREE.Color('#a855f7');
    const nebC2 = new THREE.Color('#06b6d4');

    for (let i = 0; i < nebulaCount; i++) {
        const i3 = i * 3;
        nebulaPos[i3]     = -11.5 + (Math.random() - 0.5) * 7.5;
        nebulaPos[i3 + 1] = 6.5 + (Math.random() - 0.5) * 4.5;
        nebulaPos[i3 + 2] = -8.0 + (Math.random() - 0.5) * 5.0;

        const c = nebC1.clone().lerp(nebC2, Math.random());
        nebulaCol[i3]     = c.r;
        nebulaCol[i3 + 1] = c.g;
        nebulaCol[i3 + 2] = c.b;
    }
    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaCol, 3));
    const nebulaMat = new THREE.PointsMaterial({
        size: 0.14,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const nebulaCloud = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebulaCloud);

    // Meteoroids
    const meteoroids = [];
    for (let i = 0; i < 24; i++) {
        const mGroup = new THREE.Group();
        const head = new THREE.Mesh(
            new THREE.DodecahedronGeometry(0.09, 0),
            new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
        );
        const tail = new THREE.Mesh(
            new THREE.ConeGeometry(0.06, 0.9, 8),
            new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 })
        );
        tail.rotation.z = Math.PI / 2;
        tail.position.x = -0.45;
        mGroup.add(head, tail);
        mGroup.rotation.z = -0.25;

        resetMeteor(mGroup);
        mGroup.position.x = (Math.random() - 0.5) * 32;
        scene.add(mGroup);
        meteoroids.push(mGroup);
    }

    function resetMeteor(m) {
        m.position.set(
            -18 - Math.random() * 14,
            1 + Math.random() * 9,
            -2 - Math.random() * 12
        );
        m.userData.speed = 0.12 + Math.random() * 0.16;
    }

    // Planets
    const clickablePlanets = [];

    function createOrbitRing(radius) {
        const ringGeo = new THREE.RingGeometry(radius - 0.025, radius + 0.025, 128);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.16
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);
    }

    const sunMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffaa00 })
    );
    sunMesh.userData = { id: 'sun', label: '☀️ SUN: Executive Summary' };
    sunMesh.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.25 })
    ));
    scene.add(sunMesh);
    clickablePlanets.push(sunMesh);

    createOrbitRing(3.6);
    const earthGroup = new THREE.Group();
    const earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x1d4ed8, emissive: 0x064e3b, roughness: 0.35 })
    );
    earthMesh.userData = { id: 'earth', label: '🌍 EARTH: Tech Stack' };
    earthGroup.add(earthMesh);
    scene.add(earthGroup);
    clickablePlanets.push(earthMesh);

    const moonMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 })
    );
    moonMesh.userData = { id: 'moon', label: '🌙 MOON: Work Style' };
    earthGroup.add(moonMesh);
    clickablePlanets.push(moonMesh);

    createOrbitRing(5.8);
    const marsMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x450a0a, roughness: 0.5 })
    );
    marsMesh.userData = { id: 'mars', label: '🔴 MARS: Projects' };
    scene.add(marsMesh);
    clickablePlanets.push(marsMesh);

    createOrbitRing(8.2);
    const saturnGroup = new THREE.Group();
    const saturnMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.82, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 })
    );
    saturnMesh.userData = { id: 'saturn', label: '🪐 SATURN: Education' };

    const sRing = new THREE.Mesh(
        new THREE.RingGeometry(1.05, 1.7, 64),
        new THREE.MeshBasicMaterial({ color: 0xfde68a, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
    );
    sRing.rotation.x = Math.PI / 2.4;

    saturnGroup.add(saturnMesh, sRing);
    scene.add(saturnGroup);
    clickablePlanets.push(saturnMesh);

    const labelElements = {};
    clickablePlanets.forEach(p => {
        const div = document.createElement('div');
        div.className = 'planet-label';
        div.innerHTML = p.userData.label;
        document.body.appendChild(div);
        labelElements[p.userData.id] = div;
    });

    function updatePlanetLabels() {
        clickablePlanets.forEach(p => {
            const tempV = new THREE.Vector3();
            p.getWorldPosition(tempV);
            tempV.project(camera);

            const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
            const y = (tempV.y * -0.5 + 0.5) * window.innerHeight;

            const el = labelElements[p.userData.id];
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        });
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        if (document.getElementById('planet-modal-overlay').classList.contains('open')) return;

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(clickablePlanets);

        if (intersects.length > 0) {
            const clickedId = intersects[0].object.userData.id;
            openPlanetModal(clickedId);
        }
    });

    // 3D Photo Coin
    const photoCanvas = document.querySelector('#photo-canvas');
    const photoScene = new THREE.Scene();

    const photoCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    photoCamera.position.set(0, 0, 4.1);

    const photoRenderer = new THREE.WebGLRenderer({ canvas: photoCanvas, antialias: true, alpha: true });
    photoRenderer.setSize(130, 130);
    photoRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    photoScene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const pLight = new THREE.DirectionalLight(0x00f2fe, 0.9);
    pLight.position.set(3, 3, 5);
    photoScene.add(pLight);

    const texLoader = new THREE.TextureLoader();
    const photoTex = texLoader.load('profile.jpg');

    const coinGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.25, 64);
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0x00f2fe, metalness: 0.85, roughness: 0.2 });
    const faceMat = new THREE.MeshBasicMaterial({ map: photoTex });

    const photoCoin = new THREE.Mesh(coinGeo, [edgeMat, faceMat, faceMat]);
    photoCoin.rotation.x = Math.PI / 2;
    photoCoin.rotation.y = Math.PI / 2;
    photoScene.add(photoCoin);

    const pRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.52, 0.045, 16, 64),
        new THREE.MeshBasicMaterial({ color: 0xa855f7 })
    );
    photoScene.add(pRing);

    const photoControls = new THREE.OrbitControls(photoCamera, photoCanvas);
    photoControls.enableDamping = true;
    photoControls.dampingFactor = 0.06;
    photoControls.enableZoom = false;
    photoControls.enablePan = false;

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        galaxy.rotation.y = t * 0.035;
        sunMesh.rotation.y = t * 0.3;
        nebulaCloud.rotation.z = t * 0.02;

        bhDisk1.rotation.z = -t * 0.8;
        bhDisk2.rotation.z = t * 0.6;

        meteoroids.forEach(m => {
            m.position.x += m.userData.speed;
            m.position.y -= m.userData.speed * 0.25;
            if (m.position.x > 20) {
                resetMeteor(m);
            }
        });

        earthGroup.position.x = Math.cos(t * 0.45) * 3.6;
        earthGroup.position.z = Math.sin(t * 0.45) * 3.6;
        earthMesh.rotation.y = t * 0.8;

        moonMesh.position.x = Math.cos(t * 1.8) * 1.05;
        moonMesh.position.z = Math.sin(t * 1.8) * 1.05;

        marsMesh.position.x = Math.cos(t * 0.32 + 2) * 5.8;
        marsMesh.position.z = Math.sin(t * 0.32 + 2) * 5.8;
        marsMesh.rotation.y = t * 0.7;

        saturnGroup.position.x = Math.cos(t * 0.22 + 4) * 8.2;
        saturnGroup.position.z = Math.sin(t * 0.22 + 4) * 8.2;
        saturnMesh.rotation.y = t * 0.5;

        updatePlanetLabels();
        pRing.rotation.z = t * 0.5;
        photoControls.update();

        renderer.render(scene, camera);
        photoRenderer.render(photoScene, photoCamera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        adjustCameraForScreen();
    });
} catch (err) {
    console.error("3D Scene Error:", err);
}