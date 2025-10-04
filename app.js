// MedPlus Pharmacy - Uruk Healthcare Platform JavaScript

// Application data from the provided JSON
const pharmacyData = {
  "pharmacy": {
    "name": "MedPlus Pharmacy",
    "id": "PHARM001",
    "owner": "Mr. Suresh Gupta",
    "license": "PL12345",
    "address": "123 Health Street, Mumbai, Maharashtra",
    "phone": "+91-9876543220",
    "email": "suresh@medplus.com",
    "established": "2015",
    "staff": 8
  },
  "todayStats": {
    "dailySales": 45600,
    "prescriptionsFilled": 87,
    "lowStockAlerts": 12,
    "uCardTransactions": 34,
    "totalInventoryValue": 2850000,
    "monthlyRevenue": 1250000,
    "customerSatisfaction": 4.6,
    "staffOnDuty": 6
  },
  "inventory": [
    {"id": "M001", "name": "Paracetamol 500mg", "batch": "B2024001", "expiry": "2025-08-15", "stock": 500, "reorderLevel": 100, "price": 25, "supplier": "Pharma Corp", "status": "In Stock"},
    {"id": "M002", "name": "Aspirin 75mg", "batch": "B2024002", "expiry": "2024-12-20", "stock": 45, "reorderLevel": 50, "price": 30, "supplier": "MediSupply", "status": "Low Stock"},
    {"id": "M003", "name": "Metformin 500mg", "batch": "B2024003", "expiry": "2025-06-10", "stock": 0, "reorderLevel": 75, "price": 120, "supplier": "Pharma Corp", "status": "Out of Stock"},
    {"id": "M004", "name": "Lisinopril 10mg", "batch": "B2024004", "expiry": "2025-03-25", "stock": 200, "reorderLevel": 50, "price": 180, "supplier": "HealthMed", "status": "In Stock"}
  ],
  "prescriptions": [
    {"id": "RX001", "patientName": "Rajesh Kumar", "doctorName": "Dr. Priya Sharma", "uCardNumber": "URK2024001234", "medicines": ["Lisinopril 10mg", "Aspirin 75mg"], "status": "Ready", "date": "2024-10-04", "total": 210},
    {"id": "RX002", "patientName": "Meera Patel", "doctorName": "Dr. Amit Patel", "uCardNumber": "URK2024001235", "medicines": ["Metformin 500mg"], "status": "Pending", "date": "2024-10-04", "total": 120},
    {"id": "RX003", "patientName": "Arjun Singh", "doctorName": "Dr. Priya Sharma", "uCardNumber": "URK2024001236", "medicines": ["Atorvastatin 20mg", "Lisinopril 10mg"], "status": "In Progress", "date": "2024-10-04", "total": 300},
    {"id": "RX004", "patientName": "Sita Devi", "doctorName": "Dr. Vikram Singh", "uCardNumber": "URK2024001237", "medicines": ["Paracetamol 500mg"], "status": "Dispensed", "date": "2024-10-04", "total": 25}
  ],
  "customers": [
    {"id": "C001", "name": "Rajesh Kumar", "phone": "+91-9876543210", "uCardNumber": "URK2024001234", "totalPurchases": 15600, "lastVisit": "2024-10-04", "loyaltyPoints": 156, "prescriptionCount": 12},
    {"id": "C002", "name": "Meera Patel", "phone": "+91-9876543211", "uCardNumber": "URK2024001235", "totalPurchases": 8900, "lastVisit": "2024-10-02", "loyaltyPoints": 89, "prescriptionCount": 8},
    {"id": "C003", "name": "Arjun Singh", "phone": "+91-9876543212", "uCardNumber": "URK2024001236", "totalPurchases": 23400, "lastVisit": "2024-10-01", "loyaltyPoints": 234, "prescriptionCount": 18}
  ],
  "suppliers": [
    {"id": "S001", "name": "Pharma Corp", "contact": "Mr. Raj Mehta", "phone": "+91-9876540001", "email": "raj@pharmacorp.com", "products": 156, "lastOrder": "2024-09-28", "rating": 4.8, "paymentTerms": "30 days"},
    {"id": "S002", "name": "MediSupply", "contact": "Ms. Priya Shah", "phone": "+91-9876540002", "email": "priya@medisupply.com", "products": 89, "lastOrder": "2024-10-01", "rating": 4.6, "paymentTerms": "15 days"},
    {"id": "S003", "name": "HealthMed", "contact": "Dr. Amit Kumar", "phone": "+91-9876540003", "email": "amit@healthmed.com", "products": 234, "lastOrder": "2024-09-30", "rating": 4.7, "paymentTerms": "45 days"}
  ],
  "staff": [
    {"id": "ST001", "name": "Rohit Sharma", "role": "Pharmacist", "shift": "Morning", "phone": "+91-9876540101", "experience": "5 years", "status": "On Duty", "certifications": ["PharmD", "MTM"]},
    {"id": "ST002", "name": "Priya Patel", "role": "Pharmacy Technician", "shift": "Evening", "phone": "+91-9876540102", "experience": "3 years", "status": "On Duty", "certifications": ["Pharmacy Tech"]},
    {"id": "ST003", "name": "Amit Singh", "role": "Sales Associate", "shift": "Morning", "phone": "+91-9876540103", "experience": "2 years", "status": "Off Duty", "certifications": ["Customer Service"]}
  ],
  "sales": [
    {"id": "S001", "date": "2024-10-04", "time": "09:30 AM", "customer": "Rajesh Kumar", "items": ["Paracetamol 500mg"], "total": 25, "paymentMethod": "U-Card", "staff": "Rohit Sharma"},
    {"id": "S002", "date": "2024-10-04", "time": "10:15 AM", "customer": "Walk-in", "items": ["Vitamin D"], "total": 150, "paymentMethod": "Cash", "staff": "Priya Patel"},
    {"id": "S003", "date": "2024-10-04", "time": "11:00 AM", "customer": "Meera Patel", "items": ["Aspirin 75mg", "Band-Aid"], "total": 80, "paymentMethod": "UPI", "staff": "Rohit Sharma"}
  ],
  "analytics": {
    "monthlySales": [380000, 420000, 450000, 480000, 520000, 490000, 560000, 580000, 540000, 610000, 590000, 625000],
    "popularMedicines": {"Paracetamol": 450, "Aspirin": 320, "Vitamin D": 280, "Metformin": 200, "Lisinopril": 150},
    "uCardUsage": [20, 25, 30, 34, 28, 35],
    "customerSatisfaction": [4.4, 4.5, 4.6, 4.7, 4.6, 4.6],
    "prescriptionVolume": [65, 72, 68, 78, 75, 87]
  },
  "alerts": [
    {"id": "AL001", "type": "Low Stock", "message": "Aspirin 75mg stock below reorder level", "time": "08:45 AM", "severity": "medium"},
    {"id": "AL002", "type": "Out of Stock", "message": "Metformin 500mg is out of stock", "time": "09:30 AM", "severity": "high"},
    {"id": "AL003", "type": "Expiry Alert", "message": "5 medicines expiring within 30 days", "time": "10:00 AM", "severity": "medium"}
  ]
};

// Application state
let currentPage = 'dashboard';
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupForms();
    setupSearch();
    loadDashboardData();
    loadInventoryData();
    loadPrescriptionsData();
    loadCustomersData();
    loadSalesData();
    loadSuppliersData();
    loadStaffData();
    loadComplianceData();
    
    // Initialize charts after a brief delay
    setTimeout(() => {
        createDashboardChart();
        createAnalyticsCharts();
    }, 100);
}

// Navigation
function setupNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
        });
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.sidebar__link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentPage = pageId;
    
    // Load page-specific data and charts
    if (pageId === 'analytics') {
        setTimeout(createAnalyticsCharts, 100);
    }
}

// Forms
function setupForms() {
    // Add Medicine form
    const addMedicineForm = document.getElementById('addMedicineForm');
    if (addMedicineForm) {
        addMedicineForm.addEventListener('submit', handleAddMedicine);
    }
    
    // Process Prescription form
    const processPrescriptionForm = document.getElementById('processPrescriptionForm');
    if (processPrescriptionForm) {
        processPrescriptionForm.addEventListener('submit', handleProcessPrescription);
    }
    
    // Pharmacy form
    const pharmacyForm = document.getElementById('pharmacyForm');
    if (pharmacyForm) {
        pharmacyForm.addEventListener('submit', handlePharmacyUpdate);
    }
}

function handleAddMedicine(e) {
    e.preventDefault();
    
    const name = document.getElementById('medicineName').value;
    const batch = document.getElementById('batchNumber').value;
    const expiry = document.getElementById('expiryDate').value;
    const stock = parseInt(document.getElementById('stockQuantity').value);
    const reorderLevel = parseInt(document.getElementById('reorderLevel').value);
    const price = parseFloat(document.getElementById('medicinePrice').value);
    const supplier = document.getElementById('medicineSupplier').value;
    
    const newMedicine = {
        id: `M${String(pharmacyData.inventory.length + 1).padStart(3, '0')}`,
        name,
        batch,
        expiry,
        stock,
        reorderLevel,
        price,
        supplier,
        status: stock > reorderLevel ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock'
    };
    
    pharmacyData.inventory.push(newMedicine);
    
    // Reset form
    document.getElementById('addMedicineForm').reset();
    closeModal('addMedicineModal');
    
    // Refresh inventory display
    loadInventoryData();
    loadDashboardData();
    
    showMessage(`${name} added to inventory successfully!`, 'success');
}

function handleProcessPrescription(e) {
    e.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const uCardNumber = document.getElementById('uCardNumber').value;
    const medicines = document.getElementById('prescriptionMedicines').value.split(',').map(m => m.trim());
    const total = parseFloat(document.getElementById('prescriptionTotal').value);
    
    const newPrescription = {
        id: `RX${String(pharmacyData.prescriptions.length + 1).padStart(3, '0')}`,
        patientName,
        doctorName,
        uCardNumber: uCardNumber || null,
        medicines,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0],
        total
    };
    
    pharmacyData.prescriptions.unshift(newPrescription);
    
    // Reset form
    document.getElementById('processPrescriptionForm').reset();
    closeModal('processPrescriptionModal');
    
    // Refresh prescriptions display
    loadPrescriptionsData();
    loadDashboardData();
    
    showMessage('Prescription processed successfully!', 'success');
}

function handlePharmacyUpdate(e) {
    e.preventDefault();
    
    const name = document.getElementById('pharmacyName').value;
    const owner = document.getElementById('ownerName').value;
    const license = document.getElementById('licenseNumber').value;
    const phone = document.getElementById('pharmacyPhone').value;
    const email = document.getElementById('pharmacyEmail').value;
    
    // Update pharmacy data
    pharmacyData.pharmacy.name = name;
    pharmacyData.pharmacy.owner = owner;
    pharmacyData.pharmacy.license = license;
    pharmacyData.pharmacy.phone = phone;
    pharmacyData.pharmacy.email = email;
    
    showMessage('Pharmacy information updated successfully!', 'success');
}

// Search functionality
function setupSearch() {
    // Inventory search
    const inventorySearch = document.getElementById('inventorySearch');
    if (inventorySearch) {
        inventorySearch.addEventListener('input', (e) => {
            filterInventory();
        });
    }
    
    // Status filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterInventory);
    }
    
    // Supplier filter
    const supplierFilter = document.getElementById('supplierFilter');
    if (supplierFilter) {
        supplierFilter.addEventListener('change', filterInventory);
    }
    
    // Customer search
    const customerSearch = document.getElementById('customerSearch');
    if (customerSearch) {
        customerSearch.addEventListener('input', searchCustomers);
    }
}

function filterInventory() {
    const searchTerm = document.getElementById('inventorySearch').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const supplierFilter = document.getElementById('supplierFilter').value;
    
    let filtered = pharmacyData.inventory.filter(medicine => {
        const matchesSearch = medicine.name.toLowerCase().includes(searchTerm) || 
                             medicine.batch.toLowerCase().includes(searchTerm);
        const matchesStatus = !statusFilter || medicine.status === statusFilter;
        const matchesSupplier = !supplierFilter || medicine.supplier === supplierFilter;
        
        return matchesSearch && matchesStatus && matchesSupplier;
    });
    
    displayInventory(filtered);
}

function searchCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    
    let filtered = pharmacyData.customers.filter(customer => {
        return customer.name.toLowerCase().includes(searchTerm) ||
               customer.phone.includes(searchTerm) ||
               customer.uCardNumber.toLowerCase().includes(searchTerm);
    });
    
    displayCustomers(filtered);
}

// Data loading functions
function loadDashboardData() {
    // Update stats
    document.getElementById('dailySales').textContent = `₹${pharmacyData.todayStats.dailySales.toLocaleString()}`;
    document.getElementById('prescriptionsFilled').textContent = pharmacyData.todayStats.prescriptionsFilled;
    document.getElementById('lowStockAlerts').textContent = pharmacyData.todayStats.lowStockAlerts;
    document.getElementById('uCardTransactions').textContent = pharmacyData.todayStats.uCardTransactions;
    
    // Load notifications
    loadRealTimeNotifications();
    loadRecentTransactions();
}

function loadRealTimeNotifications() {
    const container = document.getElementById('realTimeNotifications');
    if (!container) return;
    
    container.innerHTML = '';
    
    pharmacyData.alerts.forEach(alert => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'notification-item';
        
        const iconClass = alert.severity === 'high' ? 'exclamation-triangle' : 
                         alert.severity === 'medium' ? 'exclamation-circle' : 'info-circle';
        
        notificationDiv.innerHTML = `
            <div class="notification-item__icon">
                <i class="fas fa-${iconClass}"></i>
            </div>
            <div class="notification-item__content">
                <h4>${alert.type}</h4>
                <p>${alert.message}</p>
                <small>${alert.time}</small>
            </div>
        `;
        
        container.appendChild(notificationDiv);
    });
}

function loadRecentTransactions() {
    const container = document.getElementById('recentTransactions');
    if (!container) return;
    
    container.innerHTML = '';
    
    pharmacyData.sales.slice(0, 5).forEach(sale => {
        const transactionDiv = document.createElement('div');
        transactionDiv.className = 'transaction-item';
        
        transactionDiv.innerHTML = `
            <div class="transaction-info">
                <h4>${sale.customer}</h4>
                <p>${sale.time} • ${sale.staff}</p>
            </div>
            <div class="transaction-amount">₹${sale.total}</div>
        `;
        
        container.appendChild(transactionDiv);
    });
}

function loadInventoryData() {
    displayInventory(pharmacyData.inventory);
}

function displayInventory(inventory) {
    const container = document.getElementById('inventoryList');
    if (!container) return;
    
    container.innerHTML = '';
    
    inventory.forEach(medicine => {
        const medicineDiv = document.createElement('div');
        medicineDiv.className = 'medicine-card';
        
        const statusClass = medicine.status.toLowerCase().replace(' ', '-');
        const expiryDate = new Date(medicine.expiry).toLocaleDateString();
        
        medicineDiv.innerHTML = `
            <div class="medicine-card__header">
                <div>
                    <h3>${medicine.name}</h3>
                    <p class="batch-info">Batch: ${medicine.batch}</p>
                </div>
                <span class="stock-status ${statusClass}">${medicine.status}</span>
            </div>
            <div class="medicine-details">
                <div><strong>Stock:</strong> ${medicine.stock}</div>
                <div><strong>Reorder:</strong> ${medicine.reorderLevel}</div>
                <div><strong>Price:</strong> ₹${medicine.price}</div>
                <div><strong>Expiry:</strong> ${expiryDate}</div>
                <div><strong>Supplier:</strong> ${medicine.supplier}</div>
            </div>
            <div class="medicine-actions">
                <button class="btn btn--sm btn--secondary" onclick="updateStock('${medicine.id}')">
                    Update Stock
                </button>
                <button class="btn btn--sm btn--outline" onclick="viewMedicine('${medicine.id}')">
                    View Details
                </button>
            </div>
        `;
        
        container.appendChild(medicineDiv);
    });
}

function loadPrescriptionsData() {
    // Update status counts
    const pending = pharmacyData.prescriptions.filter(p => p.status === 'Pending').length;
    const inProgress = pharmacyData.prescriptions.filter(p => p.status === 'In Progress').length;
    const ready = pharmacyData.prescriptions.filter(p => p.status === 'Ready').length;
    const dispensed = pharmacyData.prescriptions.filter(p => p.status === 'Dispensed').length;
    
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('progressCount').textContent = inProgress;
    document.getElementById('readyCount').textContent = ready;
    document.getElementById('completedCount').textContent = dispensed;
    
    // Display prescription queue
    displayPrescriptions(pharmacyData.prescriptions.filter(p => p.status !== 'Dispensed'));
}

function displayPrescriptions(prescriptions) {
    const container = document.getElementById('prescriptionQueue');
    if (!container) return;
    
    container.innerHTML = '';
    
    prescriptions.forEach(prescription => {
        const prescriptionDiv = document.createElement('div');
        prescriptionDiv.className = 'prescription-item';
        
        const statusClass = prescription.status.toLowerCase().replace(' ', '-');
        const date = new Date(prescription.date).toLocaleDateString();
        
        prescriptionDiv.innerHTML = `
            <div class="prescription-header">
                <h4>Rx ${prescription.id}</h4>
                <span class="status status--${statusClass}">${prescription.status}</span>
            </div>
            <div class="prescription-meta">
                <div><strong>Patient:</strong> ${prescription.patientName}</div>
                <div><strong>Doctor:</strong> ${prescription.doctorName}</div>
                <div><strong>Date:</strong> ${date}</div>
            </div>
            ${prescription.uCardNumber ? `<div class="ucard-info"><strong>U-Card:</strong> ${prescription.uCardNumber}</div>` : ''}
            <div class="prescription-medicines">
                <h5>Medicines:</h5>
                <p>${prescription.medicines.join(', ')}</p>
            </div>
            <div class="prescription-actions">
                <span class="prescription-total"><strong>Total: ₹${prescription.total}</strong></span>
                ${prescription.status === 'Pending' ? `<button class="btn btn--sm btn--primary" onclick="updatePrescriptionStatus('${prescription.id}', 'In Progress')">Start Processing</button>` : ''}
                ${prescription.status === 'In Progress' ? `<button class="btn btn--sm btn--success" onclick="updatePrescriptionStatus('${prescription.id}', 'Ready')">Mark Ready</button>` : ''}
                ${prescription.status === 'Ready' ? `<button class="btn btn--sm btn--primary" onclick="dispensePrescription('${prescription.id}')">Dispense</button>` : ''}
            </div>
        `;
        
        container.appendChild(prescriptionDiv);
    });
}

function loadCustomersData() {
    displayCustomers(pharmacyData.customers);
}

function displayCustomers(customers) {
    const container = document.getElementById('customersList');
    if (!container) return;
    
    container.innerHTML = '';
    
    customers.forEach(customer => {
        const customerDiv = document.createElement('div');
        customerDiv.className = 'customer-card';
        
        const lastVisit = new Date(customer.lastVisit).toLocaleDateString();
        
        customerDiv.innerHTML = `
            <div class="customer-header">
                <h4>${customer.name}</h4>
                <span class="ucard-badge">U-Card</span>
            </div>
            <div class="customer-details">
                <div><strong>Phone:</strong> ${customer.phone}</div>
                <div><strong>U-Card:</strong> ${customer.uCardNumber}</div>
                <div><strong>Last Visit:</strong> ${lastVisit}</div>
                <div><strong>Loyalty Points:</strong> ${customer.loyaltyPoints}</div>
            </div>
            <div class="customer-stats">
                <div class="customer-stats-item">
                    <span>Total Purchases</span>
                    <span>₹${customer.totalPurchases.toLocaleString()}</span>
                </div>
                <div class="customer-stats-item">
                    <span>Prescriptions</span>
                    <span>${customer.prescriptionCount}</span>
                </div>
            </div>
        `;
        
        container.appendChild(customerDiv);
    });
}

function loadSalesData() {
    displaySales(pharmacyData.sales);
}

function displaySales(sales) {
    const container = document.getElementById('salesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    sales.forEach(sale => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'sale-item';
        
        const date = new Date(sale.date).toLocaleDateString();
        
        saleDiv.innerHTML = `
            <div class="sale-info">
                <h4>Sale ${sale.id}</h4>
                <p>${date} ${sale.time} • ${sale.customer}</p>
                <p>Items: ${sale.items.join(', ')}</p>
                <p>Staff: ${sale.staff}</p>
            </div>
            <div class="sale-amount">
                <div class="amount">₹${sale.total}</div>
                <div class="method">${sale.paymentMethod}</div>
            </div>
        `;
        
        container.appendChild(saleDiv);
    });
}

function loadSuppliersData() {
    const container = document.getElementById('suppliersList');
    if (!container) return;
    
    container.innerHTML = '';
    
    pharmacyData.suppliers.forEach(supplier => {
        const supplierDiv = document.createElement('div');
        supplierDiv.className = 'supplier-card';
        
        const lastOrder = new Date(supplier.lastOrder).toLocaleDateString();
        const stars = '★'.repeat(Math.floor(supplier.rating)) + '☆'.repeat(5 - Math.floor(supplier.rating));
        
        supplierDiv.innerHTML = `
            <div class="supplier-header">
                <h3>${supplier.name}</h3>
                <div class="supplier-rating">
                    <span style="color: #fbbf24;">${stars}</span>
                    <span>${supplier.rating}</span>
                </div>
            </div>
            <div class="supplier-contact">
                <p><strong>Contact:</strong> ${supplier.contact}</p>
                <p><strong>Phone:</strong> ${supplier.phone}</p>
                <p><strong>Email:</strong> ${supplier.email}</p>
            </div>
            <div class="supplier-stats">
                <div class="supplier-stat">
                    <div class="value">${supplier.products}</div>
                    <div class="label">Products</div>
                </div>
                <div class="supplier-stat">
                    <div class="value">${supplier.paymentTerms}</div>
                    <div class="label">Payment Terms</div>
                </div>
            </div>
            <div class="supplier-actions">
                <p class="text-secondary">Last Order: ${lastOrder}</p>
                <button class="btn btn--primary" onclick="createPurchaseOrder('${supplier.id}')">
                    Create Order
                </button>
            </div>
        `;
        
        container.appendChild(supplierDiv);
    });
}

function loadStaffData() {
    const container = document.getElementById('staffList');
    if (!container) return;
    
    container.innerHTML = '';
    
    pharmacyData.staff.forEach(staff => {
        const staffDiv = document.createElement('div');
        staffDiv.className = 'staff-card';
        
        const statusClass = staff.status.toLowerCase().replace(' ', '-');
        
        staffDiv.innerHTML = `
            <div class="staff-header">
                <h4>${staff.name}</h4>
                <span class="duty-status ${statusClass}">${staff.status}</span>
            </div>
            <div class="staff-role">${staff.role}</div>
            <div class="staff-details">
                <p><strong>Shift:</strong> ${staff.shift}</p>
                <p><strong>Phone:</strong> ${staff.phone}</p>
                <p><strong>Experience:</strong> ${staff.experience}</p>
            </div>
            <div class="certifications">
                ${staff.certifications.map(cert => `<span class="certification-badge">${cert}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(staffDiv);
    });
}

function loadComplianceData() {
    const container = document.getElementById('complianceAlerts');
    if (!container) return;
    
    const complianceAlerts = [
        {type: 'License Renewal', message: 'Pharmacy license expires in 60 days', severity: 'medium'},
        {type: 'Staff Training', message: 'Annual staff training due next month', severity: 'low'},
        {type: 'Audit Preparation', message: 'Quarterly audit scheduled for next week', severity: 'high'}
    ];
    
    container.innerHTML = '';
    
    complianceAlerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert-item severity-${alert.severity}`;
        
        const iconClass = alert.severity === 'high' ? 'exclamation-triangle' : 
                         alert.severity === 'medium' ? 'exclamation-circle' : 'info-circle';
        
        alertDiv.innerHTML = `
            <div class="alert-item__icon">
                <i class="fas fa-${iconClass}"></i>
            </div>
            <div class="alert-item__content">
                <h4>${alert.type}</h4>
                <p>${alert.message}</p>
            </div>
        `;
        
        container.appendChild(alertDiv);
    });
}

// Chart functions
function createDashboardChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;
    
    const lastWeekSales = [38000, 42000, 35000, 45000, 48000, 52000, 45600];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];
    
    charts.salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Daily Sales (₹)',
                data: lastWeekSales,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function createAnalyticsCharts() {
    // Monthly Sales Chart
    const monthlySalesCtx = document.getElementById('monthlySalesChart');
    if (monthlySalesCtx && !charts.monthlySalesChart) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        charts.monthlySalesChart = new Chart(monthlySalesCtx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Monthly Sales (₹)',
                    data: pharmacyData.analytics.monthlySales,
                    backgroundColor: '#1FB8CD',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value/1000) + 'K';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Popular Medicines Chart
    const popularMedicinesCtx = document.getElementById('popularMedicinesChart');
    if (popularMedicinesCtx && !charts.popularMedicinesChart) {
        const medicines = Object.keys(pharmacyData.analytics.popularMedicines);
        const quantities = Object.values(pharmacyData.analytics.popularMedicines);
        
        charts.popularMedicinesChart = new Chart(popularMedicinesCtx, {
            type: 'doughnut',
            data: {
                labels: medicines,
                datasets: [{
                    data: quantities,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // U-Card Usage Chart
    const uCardCtx = document.getElementById('uCardChart');
    if (uCardCtx && !charts.uCardChart) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        charts.uCardChart = new Chart(uCardCtx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [{
                    label: 'U-Card Transactions',
                    data: pharmacyData.analytics.uCardUsage,
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Customer Satisfaction Chart
    const satisfactionCtx = document.getElementById('satisfactionChart');
    if (satisfactionCtx && !charts.satisfactionChart) {
        const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        charts.satisfactionChart = new Chart(satisfactionCtx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Customer Satisfaction',
                    data: pharmacyData.analytics.customerSatisfaction,
                    borderColor: '#5D878F',
                    backgroundColor: 'rgba(93, 135, 143, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 4.0,
                        max: 5.0,
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1) + '/5';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Modal functions - Fixed to prevent persistent elements
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        // Ensure proper z-index and display
        modal.style.display = 'flex';
        modal.style.zIndex = '10000';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        // Ensure complete cleanup
        modal.style.display = 'none';
        modal.style.zIndex = '';
        
        // Remove any potential leftover backdrop elements
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach(backdrop => backdrop.remove());
    }
}

function showAddMedicineModal() {
    showModal('addMedicineModal');
}

function showProcessPrescriptionModal() {
    showModal('processPrescriptionModal');
}

function showEmergencyStockModal() {
    showMessage('Emergency stock order feature would be implemented here', 'info');
}

function showAddCustomerModal() {
    showMessage('Add customer feature would be implemented here', 'info');
}

function showAddSupplierModal() {
    showMessage('Add supplier feature would be implemented here', 'info');
}

function showAddStaffModal() {
    showMessage('Add staff feature would be implemented here', 'info');
}

function showPOSModal() {
    showMessage('POS system would be implemented here', 'info');
}

function showNewSaleModal() {
    showMessage('New sale entry would be implemented here', 'info');
}

// Utility functions
function updateStock(medicineId) {
    const medicine = pharmacyData.inventory.find(m => m.id === medicineId);
    if (medicine) {
        const newStock = prompt(`Update stock for ${medicine.name} (Current: ${medicine.stock}):`);
        if (newStock !== null && !isNaN(newStock)) {
            medicine.stock = parseInt(newStock);
            medicine.status = medicine.stock > medicine.reorderLevel ? 'In Stock' : 
                             medicine.stock > 0 ? 'Low Stock' : 'Out of Stock';
            loadInventoryData();
            showMessage(`Stock updated for ${medicine.name}`, 'success');
        }
    }
}

function viewMedicine(medicineId) {
    const medicine = pharmacyData.inventory.find(m => m.id === medicineId);
    if (medicine) {
        alert(`Medicine Details:\n\nName: ${medicine.name}\nBatch: ${medicine.batch}\nExpiry: ${medicine.expiry}\nStock: ${medicine.stock}\nPrice: ₹${medicine.price}\nSupplier: ${medicine.supplier}`);
    }
}

function updatePrescriptionStatus(prescriptionId, newStatus) {
    const prescription = pharmacyData.prescriptions.find(p => p.id === prescriptionId);
    if (prescription) {
        prescription.status = newStatus;
        loadPrescriptionsData();
        showMessage(`Prescription ${prescriptionId} status updated to ${newStatus}`, 'success');
    }
}

function dispensePrescription(prescriptionId) {
    const prescription = pharmacyData.prescriptions.find(p => p.id === prescriptionId);
    if (prescription) {
        prescription.status = 'Dispensed';
        loadPrescriptionsData();
        showMessage(`Prescription ${prescriptionId} dispensed successfully`, 'success');
        
        // Update sales data
        const newSale = {
            id: `S${String(pharmacyData.sales.length + 1).padStart(3, '0')}`,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            customer: prescription.patientName,
            items: prescription.medicines,
            total: prescription.total,
            paymentMethod: prescription.uCardNumber ? 'U-Card' : 'Cash',
            staff: 'System'
        };
        pharmacyData.sales.unshift(newSale);
    }
}

function createPurchaseOrder(supplierId) {
    const supplier = pharmacyData.suppliers.find(s => s.id === supplierId);
    if (supplier) {
        showMessage(`Purchase order creation for ${supplier.name} would be implemented here`, 'info');
    }
}

function refreshData() {
    loadDashboardData();
    showMessage('Data refreshed successfully!', 'success');
}

function exportInventory() {
    showMessage('Inventory export feature would be implemented here', 'info');
}

function scanBarcode() {
    showMessage('Barcode scanning feature would be implemented here', 'info');
}

function generateReport() {
    showMessage('Report generation feature would be implemented here', 'info');
}

function generateComplianceReport() {
    showMessage('Compliance report generation would be implemented here', 'info');
}

function loadMoreSales() {
    showMessage('Loading more sales data...', 'info');
}

// Message system
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Trigger animation
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// Enhanced modal event handling to prevent persistent elements
document.addEventListener('click', function(e) {
    // Close modal when clicking on backdrop
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
    
    // Handle modal close buttons
    if (e.target.classList.contains('modal__close')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    }
});

// Prevent modal close when clicking inside modal content
document.addEventListener('click', function(e) {
    if (e.target.closest('.modal__content')) {
        e.stopPropagation();
    }
});

// Escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal:not(.hidden)');
        openModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});