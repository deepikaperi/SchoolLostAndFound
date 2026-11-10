import React, { useState } from 'react';

// Custom SVG Icons
const IconSchool = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6.5" />
  </svg>
);

const IconBell = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconSearch = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconPlus = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const IconClose = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconMapPin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconTrash = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const IconMessageSquare = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const IconSend = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconShieldAlert = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const getDaysInApp = (datePostedString) => {
  if (!datePostedString) return 0;
  const postedDate = new Date(datePostedString);
  const currentDate = new Date('2026-11-08');
  const diffTime = Math.abs(currentDate - postedDate);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const INITIAL_ITEMS = [
  {
    id: 'item-earbuds',
    title: 'White Wireless Earbuds',
    category: 'Glasses & Accessories',
    estimatedValue: 40.00,
    location: 'School Library',
    description: 'Found near computer desk 3 in a white magnetic charging case with a small blue sticker.',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-11-01',
    postedBy: 'Bhargav Kandala',
    status: 'pending',
    hasNotification: true,
    notificationMessage: '1 NEW NOTIFICATION: Claim submitted for review',
    claimInfo: {
      studentName: 'Oliver Vance',
      grade: 'Grade 5C',
      contact: '07700 900789',
      verificationDetails: 'Small blue star sticker on bottom of white case. Serial #EB-4402.',
      highValueProof: 'Pairing code visible in phone Bluetooth settings'
    }
  },
  {
    id: 'item-sunglasses',
    title: 'Ray-Ban Junior Designer Sunglasses',
    category: 'Glasses & Accessories',
    estimatedValue: 45.00,
    location: 'Library Reading Nook',
    description: 'Black tortoiseshell frame sunglasses in a black hard protective case. Left on lower book display shelf.',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-11-05',
    postedBy: 'Bhargav Kandala',
    status: 'available',
    hasNotification: true,
    notificationMessage: '1 NEW HIGH VALUE ITEM: Verification required',
    claimInfo: null
  },
  {
    id: 'item-bag',
    title: 'Navy Blue Nike Backpack',
    category: 'Backpacks & Bags',
    estimatedValue: 35.00,
    location: 'Gymnasium Bleachers',
    description: 'Dark blue backpack with silver zipper. Contains PE kit and dinosaur keychain attached to front pocket.',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-10-30',
    postedBy: 'Bhargav Kandala',
    status: 'pending',
    hasNotification: true,
    notificationMessage: '1 NEW NOTIFICATION: Claim submitted for review',
    claimInfo: {
      studentName: 'Alex Smith',
      grade: 'Grade 4B',
      contact: '07700 900123',
      verificationDetails: 'Serial tag on strap reads NK-8821. Inside zip pocket has dinosaurs keychain.',
      highValueProof: 'Receipt invoice #8921 or exact pencil case contents'
    }
  },
  {
    id: 'item-watch',
    title: 'Kids Fitness Tracker Watch',
    category: 'Electronics',
    estimatedValue: 65.00,
    location: 'Basketball Court',
    description: 'Black strap digital watch with cracked edge protector. Found near the outdoor bleachers.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-11-01',
    postedBy: 'Bhargav Kandala',
    status: 'pending',
    hasNotification: true,
    notificationMessage: '1 NEW NOTIFICATION: Claim submitted for review',
    claimInfo: {
      studentName: 'Leo Jenkins',
      grade: 'Grade 6A',
      contact: '07700 900999',
      verificationDetails: 'Minor hairline scratch on top corner of glass bezel. Red silicone strap pin.',
      highValueProof: 'Synced to parent phone via FitKid App account #JK-991'
    }
  },
  {
    id: 'item-bottle',
    title: 'Thermo Stainless Water Bottle',
    category: 'Water Bottles',
    estimatedValue: 8.50,
    location: 'Cafeteria Table 4',
    description: 'Red 32oz stainless steel water bottle. Has several space-themed stickers on the back.',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-09-25',
    postedBy: 'Bhargav Kandala',
    status: 'available',
    hasNotification: false,
    notificationMessage: '',
    claimInfo: null
  },
  {
    id: 'item-jacket',
    title: 'Red Winter Fleece Jacket',
    category: 'Clothing',
    estimatedValue: 18.00,
    location: 'Main Playground',
    description: 'Warm fleece jacket, size M (8-10). Yellow zip tag and embroidered Queens Park crest.',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600',
    datePosted: '2026-09-20',
    postedBy: 'Bhargav Kandala',
    status: 'available',
    hasNotification: false,
    notificationMessage: '',
    claimInfo: null
  }
];

const INITIAL_NOTIFICATIONS = [
  { id: 1, title: 'Portal Ready', message: 'Earbuds & Sunglasses are assigned to Glasses & Accessories.', time: 'Just now', unread: true }
];

const CATEGORIES = ['All Items', 'Glasses & Accessories', 'High Value (>£30)', '30+ Days (PTA Stock)', 'Backpacks & Bags', 'Electronics', 'Clothing', 'Water Bottles'];

function ItemBadges({ isHighVal, isOver30Days, daysRemaining }) {
  if (isHighVal) {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-1">
        <IconShieldAlert className="w-3.5 h-3.5 text-yellow-300" />
        <span>HIGH VALUE (&gt;£30)</span>
      </div>
    );
  }

  if (!isOver30Days) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1 border border-amber-400/30">
        <IconClock className="w-3.5 h-3.5 text-amber-400" />
        <span>⏳ {daysRemaining} days left before PTA Transfer</span>
      </div>
    );
  }

  return (
    <div className="bg-purple-900 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
      <span>30-Day Expiry Ended — Transferred to PTA</span>
    </div>
  );
}

const getStatusLabel = (status) => {
  if (status === 'available') return 'Available';
  if (status === 'pending') return 'Claim Pending';
  if (status === 'returned') return 'Returned';
  return '';
};

export default function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [role, setRole] = useState('parent');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const [isClaimOpen, setIsClaimOpen] = useState(false);
  const [activeClaimItem, setActiveClaimItem] = useState(null);
  const [claimForm, setClaimForm] = useState({
    studentName: '',
    grade: '',
    contact: '',
    verificationDetails: '',
    highValueProof: ''
  });

  const [activeChatItem, setActiveChatItem] = useState(null);
  const [chatMessages, setChatMessages] = useState({
    'item-earbuds': [
      { sender: 'staff', name: 'Bhargav Kandala', text: 'Hello! I found these white wireless earbuds near computer desk 3 in the library.', time: 'Yesterday' }
    ]
  });
  const [newMsgText, setNewMsgText] = useState('');

  const [isPostOpen, setIsPostOpen] = useState(false);
  const [postForm, setPostForm] = useState({
    title: '',
    category: 'Glasses & Accessories',
    estimatedValue: '35.00',
    location: '',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600'
  });

  const handleApproveClaim = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'returned', hasNotification: false } : item));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postForm.title || !postForm.location) return;

    const valNum = parseFloat(postForm.estimatedValue) || 0;
    const isHighVal = valNum > 30;

    const newItem = {
      id: 'item-' + Date.now(),
      title: postForm.title,
      category: postForm.category,
      estimatedValue: valNum,
      location: postForm.location,
      description: postForm.description,
      imageUrl: postForm.imageUrl,
      datePosted: '2026-11-08',
      postedBy: 'Bhargav Kandala',
      status: 'available',
      hasNotification: isHighVal,
      notificationMessage: isHighVal ? '1 NEW HIGH VALUE ITEM: Extra verification required' : '',
      claimInfo: null
    };

    setItems([newItem, ...items]);

    if (isHighVal) {
      setNotifications([
        { 
          id: Date.now(), 
          title: 'New HIGH VALUE Item Tagged', 
          message: `${newItem.title} (£${valNum.toFixed(2)}) requires extra security verification when claiming.`, 
          time: 'Just now', 
          unread: true 
        },
        ...notifications
      ]);
    }

    setIsPostOpen(false);
    setPostForm({
      title: '',
      category: 'Glasses & Accessories',
      estimatedValue: '35.00',
      location: '',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600'
    });
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.location.toLowerCase().includes(search.toLowerCase());
    
    const daysInApp = getDaysInApp(item.datePosted);
    const isOver30Days = daysInApp >= 30;
    const isLowValue = (item.estimatedValue || 0) <= 30;

    let matchesCategory = true;
    if (selectedCategory === 'High Value (>£30)') {
      matchesCategory = (item.estimatedValue || 0) > 30;
    } else if (selectedCategory === '30+ Days (PTA Stock)') {
      matchesCategory = isOver30Days || isLowValue;
    } else if (selectedCategory !== 'All Items') {
      matchesCategory = item.category === selectedCategory;
    }

    if (selectedCategory === 'All Items') {
      return matchesSearch;
    }
    
    return matchesSearch && matchesCategory;
  });

  const unreadNotifCount = notifications.filter(n => n.unread).length;

  const markAllNotifsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    if (!activeClaimItem) return;

    setItems(items.map(item => {
      if (item.id === activeClaimItem.id) {
        return {
          ...item,
          status: 'pending',
          claimInfo: { ...claimForm },
          hasNotification: true,
          notificationMessage: `CLAIM PENDING: ${claimForm.studentName}`
        };
      }
      return item;
    }));

    setIsClaimOpen(false);
    setClaimForm({
      studentName: '',
      grade: '',
      contact: '',
      verificationDetails: '',
      highValueProof: ''
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMsgText.trim() || !activeChatItem) return;

    const itemId = activeChatItem.id;
    const existing = chatMessages[itemId] || [];
    const updated = [
      ...existing,
      {
        sender: role === 'parent' ? 'user' : 'staff',
        name: role === 'parent' ? 'Mrs. Simmons' : 'Bhargav Kandala',
        text: newMsgText.trim(),
        time: 'Just now'
      }
    ];

    setChatMessages({ ...chatMessages, [itemId]: updated });
    setNewMsgText('');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-12">
      {/* HEADER NAVBAR */}
      <header className="bg-indigo-900 text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-700 p-2 rounded-xl border border-indigo-500">
              <IconSchool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg leading-tight">Queens Park Academy</h1>
              <p className="text-xs text-indigo-200">Boomerang Lost &amp; Found Portal</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setActiveChatItem(items[0] || null)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-sm"
            >
              <IconMessageSquare className="w-4 h-4" />
              <span>Message Staff (Bhargav Kandala)</span>
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="p-2 bg-indigo-800 hover:bg-indigo-700 rounded-xl transition-colors relative"
                aria-label="Notifications"
              >
                <IconBell className="w-5 h-5 text-indigo-200" />
                {unreadNotifCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {unreadNotifCount}
                  </span>
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50">
                  <div className="p-3 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
                    <span className="font-bold text-xs text-indigo-900">Notifications</span>
                    <button 
                      onClick={markAllNotifsRead}
                      className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map(n => (
                      <div key={n.id} className={`p-3 text-xs ${n.unread ? 'bg-indigo-50/40' : 'bg-white'}`}>
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-indigo-950">{n.title}</span>
                          <span className="text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="text-slate-600">{n.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-indigo-950 p-1 rounded-xl flex space-x-1 border border-indigo-800">
              <button
                onClick={() => setRole('parent')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  role === 'parent' ? 'bg-emerald-500 text-white shadow-sm' : 'text-indigo-300 hover:text-white'
                }`}
              >
                Parent / Kid
              </button>
              <button
                onClick={() => setRole('teacher')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  role === 'teacher' ? 'bg-indigo-600 text-white shadow-sm' : 'text-indigo-300 hover:text-white'
                }`}
              >
                Teacher Portal
              </button>
              <button
                onClick={() => setRole('pta')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  role === 'pta' ? 'bg-purple-600 text-white shadow-sm' : 'text-indigo-300 hover:text-white'
                }`}
              >
                PTA Admin
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-indigo-950">
              {role === 'parent' ? 'Find & Claim Lost Belongings' : role === 'teacher' ? 'Teacher Management Dashboard' : 'PTA Admin Control Center'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {role === 'parent' 
                ? 'Browse lost items reported by staff. Click the green CLAIM button to submit a claim.' 
                : role === 'teacher'
                ? 'Upload pictures of items found on school grounds and verify student claim requests.'
                : 'Oversee lost items, publish announcements, and manage unclaimed school belongings.'}
            </p>
          </div>

          {(role === 'teacher' || role === 'pta') && (
            <button
              onClick={() => setIsPostOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md text-xs flex items-center space-x-2 transition-all active:scale-95"
            >
              <IconPlus className="w-4 h-4" />
              <span>{role === 'pta' ? 'Post PTA Found Item' : 'Post Found Item'}</span>
            </button>
          )}
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <IconSearch className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, location (e.g. Gym, Library)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat 
                    ? 'bg-indigo-900 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ITEMS GRID */}
        {filteredItems.length === 0 ? (
          <div className="col-span-full bg-white rounded-2xl p-12 border border-slate-200 text-center shadow-xs">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <IconSearch className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">No Items Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Try adjusting your search query or selecting a different category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => {
              const isHighVal = (item.estimatedValue || 0) > 30;
              const daysInApp = getDaysInApp(item.datePosted);
              const isOver30Days = daysInApp >= 30;
              const daysRemaining = Math.max(0, 30 - daysInApp);

              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-2xl border shadow-xs overflow-hidden flex flex-col justify-between transition-all hover:shadow-md ${
                    isOver30Days ? 'border-purple-300 ring-2 ring-purple-500/20' : 'border-slate-200'
                  }`}
                >
                  <div>
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <ItemBadges 
                          isHighVal={isHighVal} 
                          isOver30Days={isOver30Days} 
                          daysRemaining={daysRemaining} 
                        />
                      </div>

                      {isOver30Days && (
                        <div className="absolute top-3 right-3 bg-purple-700 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                          <span>PTA ADMIN STOCK</span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-xs ${
                          item.status === 'available' ? 'bg-emerald-500 text-white' :
                          item.status === 'pending' ? 'bg-amber-500 text-white' : 'bg-slate-600 text-white'
                        }`}>
                          {getStatusLabel(item.status)}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-extrabold text-slate-900 text-base leading-snug">{item.title}</h3>
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                          {item.category}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{item.description}</p>

                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                        <div className="flex items-center space-x-1.5">
                          <IconMapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span><strong>Found at:</strong> {item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <IconClock className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span>Posted on {item.datePosted} by {item.postedBy}</span>
                        </div>
                        {item.estimatedValue != null && (
                          <div className="text-[11px] text-indigo-900 font-semibold pt-1">
                            Estimated Value: £{Number(item.estimatedValue).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    {item.claimInfo && (
                      <div className="mt-3 p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-0.5">
                        <p className="font-bold">Claim Request Details:</p>
                        <p>Student: {item.claimInfo.studentName} ({item.claimInfo.grade})</p>
                        <p>Contact: {item.claimInfo.contact}</p>
                        {item.claimInfo.highValueProof && (
                          <p className="font-semibold text-purple-900 bg-purple-100/80 p-1 rounded mt-1">
                            Proof: {item.claimInfo.highValueProof}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                      {role === 'parent' ? (
                        <>
                          {item.status === 'available' ? (
                            <button
                              onClick={() => { setActiveClaimItem(item); setIsClaimOpen(true); }}
                              className={`w-full text-white font-black py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 text-xs active:scale-95 ${
                                isHighVal 
                                  ? 'bg-gradient-to-r from-emerald-600 to-indigo-700 hover:from-emerald-700 hover:to-indigo-800' 
                                  : 'bg-emerald-600 hover:bg-emerald-700'
                              }`}
                            >
                              <IconCheck className="w-4 h-4" />
                              <span>{isHighVal ? 'CLAIM HIGH VALUE ITEM' : 'CLAIM ITEM'}</span>
                            </button>
                          ) : (
                            <div className="bg-slate-100 text-slate-500 text-xs font-bold py-2 px-3 rounded-xl text-center">
                              {item.status === 'pending' ? 'Claim Request Submitted' : 'Returned to Owner'}
                            </div>
                          )}

                          <button
                            onClick={() => setActiveChatItem(item)}
                            className="w-full bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold py-2 px-3 rounded-xl text-xs border border-slate-200 flex items-center justify-center space-x-1.5 transition-colors"
                          >
                            <IconMessageSquare className="w-4 h-4 text-indigo-600" />
                            <span>Message Staff ({item.postedBy})</span>
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => setActiveChatItem(item)}
                            className="w-full bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold py-1.5 px-3 rounded-xl text-xs border border-slate-200 flex items-center justify-center space-x-1.5 transition-colors"
                          >
                            <IconMessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Item Messages</span>
                          </button>

                          <div className="flex items-center gap-1.5">
                            {item.status === 'pending' && (
                              <button
                                onClick={() => handleApproveClaim(item.id)}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs"
                              >
                                Approve
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg ml-auto transition-colors"
                              title="Delete Listing"
                            >
                              <IconTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* CHAT DRAWER */}
      {activeChatItem && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center space-x-3">
                  <img src={activeChatItem.imageUrl} alt={activeChatItem.title} className="w-10 h-10 rounded-xl object-cover border" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm truncate max-w-[200px]">{activeChatItem.title}</h3>
                    <p className="text-[11px] text-indigo-600 font-medium">Inquiry with {activeChatItem.postedBy}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveChatItem(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <IconClose className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto p-2 bg-slate-50 rounded-2xl border border-slate-100">
                {(!chatMessages[activeChatItem.id] || chatMessages[activeChatItem.id].length === 0) ? (
                  <div className="text-center py-8 text-slate-400 text-xs">
                    <IconMessageSquare className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                    <p>No messages yet.</p>
                  </div>
                ) : (
                  chatMessages[activeChatItem.id].map((msg, idx) => {
                    const isUser = msg.sender === 'user';
                    return (
                      <div key={idx} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] text-slate-400 font-semibold mb-0.5">{msg.name} • {msg.time}</span>
                        <div className={`p-3 rounded-2xl text-xs max-w-[85%] ${
                          isUser ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMsgText}
                onChange={(e) => setNewMsgText(e.target.value)}
                className="flex-1 p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md font-bold transition-transform active:scale-95"
              >
                <IconSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CLAIM MODAL */}
      {isClaimOpen && activeClaimItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Claim Item Verification</h3>
                <p className="text-xs text-indigo-600 font-semibold">{activeClaimItem.title} (£{activeClaimItem.estimatedValue?.toFixed(2)})</p>
              </div>
              <button onClick={() => setIsClaimOpen(false)} className="text-slate-400 hover:text-slate-600">
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {(activeClaimItem.estimatedValue || 0) > 30 && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-4 flex items-start space-x-2 text-xs text-purple-900">
                <IconShieldAlert className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">High Value Security Item (&gt;£30)</p>
                  <p className="text-[11px] text-purple-700">This item requires specific verification details (e.g. serial tag number, invoice details, or specific bag contents).</p>
                </div>
              </div>
            )}

            <form onSubmit={handleClaimSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Student Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={claimForm.studentName}
                  onChange={(e) => setClaimForm({ ...claimForm, studentName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Grade / Class</label>
                <input
                  type="text"
                  placeholder="e.g. Grade 4B"
                  value={claimForm.grade}
                  onChange={(e) => setClaimForm({ ...claimForm, grade: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07700 900123"
                  value={claimForm.contact}
                  onChange={(e) => setClaimForm({ ...claimForm, contact: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">General Item Description / Key Identifiers</label>
                <textarea
                  rows={2}
                  placeholder="Describe unique marks, stickers, or brand names..."
                  value={claimForm.verificationDetails}
                  onChange={(e) => setClaimForm({ ...claimForm, verificationDetails: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {(activeClaimItem.estimatedValue || 0) > 30 && (
                <div>
                  <label className="block font-bold text-purple-900 mb-1">High Value Proof / Hidden Contents *</label>
                  <input
                    type="text"
                    required
                    placeholder="Provide serial number, unique contents, or proof"
                    value={claimForm.highValueProof}
                    onChange={(e) => setClaimForm({ ...claimForm, highValueProof: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-purple-300 bg-purple-50/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsClaimOpen(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md"
                >
                  Submit Claim Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* POST NEW ITEM MODAL */}
      {isPostOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden p-6 max-h-[90vh] overflow-y-auto text-xs">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="font-bold text-slate-900 text-base">Register Found Item</h3>
              <button onClick={() => setIsPostOpen(false)} className="text-slate-400 hover:text-slate-600">
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePostSubmit} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Item Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Red Nike Backpack"
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={postForm.category}
                    onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option>Glasses & Accessories</option>
                    <option>Backpacks & Bags</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Water Bottles</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Est. Original (£)</label>
                  <input
                    type="number"
                    step="0.50"
                    placeholder="35.00"
                    value={postForm.estimatedValue}
                    onChange={(e) => setPostForm({ ...postForm, estimatedValue: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Location Found *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Science Lab 2, Gym Bleachers"
                  value={postForm.location}
                  onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description / Unique Marks</label>
                <textarea
                  rows={2}
                  placeholder="Add details like color, keychains, stickers, or brand names..."
                  value={postForm.description}
                  onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsPostOpen(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
                >
                  Post Found Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
