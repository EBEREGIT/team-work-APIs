--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

-- Started on 2020-05-23 01:46:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 24689)
-- Name: admins; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.admins (
    id integer NOT NULL,
    firstname character varying(128) NOT NULL,
    lastname character varying(128) NOT NULL,
    email character varying(128) NOT NULL,
    password character(150) NOT NULL,
    gender character varying(128) NOT NULL,
    jobrole character varying(128) NOT NULL,
    department character varying(128) NOT NULL,
    address text NOT NULL
);


ALTER TABLE public.admins OWNER TO team_work;

--
-- TOC entry 204 (class 1259 OID 24687)
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_id_seq OWNER TO team_work;

--
-- TOC entry 2881 (class 0 OID 0)
-- Dependencies: 204
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- TOC entry 207 (class 1259 OID 32908)
-- Name: articles; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title character varying(128) NOT NULL,
    body text NOT NULL,
    created_on date NOT NULL
);


ALTER TABLE public.articles OWNER TO team_work;

--
-- TOC entry 212 (class 1259 OID 41113)
-- Name: articles_comment; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.articles_comment (
    id integer NOT NULL,
    article_id character varying(128) NOT NULL,
    comment character varying(128) NOT NULL,
    created_on date NOT NULL
);


ALTER TABLE public.articles_comment OWNER TO team_work;

--
-- TOC entry 210 (class 1259 OID 41109)
-- Name: articles_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.articles_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_comment_id_seq OWNER TO team_work;

--
-- TOC entry 2882 (class 0 OID 0)
-- Dependencies: 210
-- Name: articles_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.articles_comment_id_seq OWNED BY public.articles_comment.id;


--
-- TOC entry 206 (class 1259 OID 32906)
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_id_seq OWNER TO team_work;

--
-- TOC entry 2883 (class 0 OID 0)
-- Dependencies: 206
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- TOC entry 203 (class 1259 OID 24678)
-- Name: employees; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    first_name character varying(128) NOT NULL,
    last_name character varying(128) NOT NULL,
    email character varying(128) NOT NULL,
    password character(150) NOT NULL,
    gender character varying(128) NOT NULL,
    job_role character varying(128) NOT NULL,
    department character varying(128) NOT NULL,
    address text NOT NULL
);


ALTER TABLE public.employees OWNER TO team_work;

--
-- TOC entry 202 (class 1259 OID 24676)
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_id_seq OWNER TO team_work;

--
-- TOC entry 2884 (class 0 OID 0)
-- Dependencies: 202
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- TOC entry 209 (class 1259 OID 32919)
-- Name: gifs; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.gifs (
    id integer NOT NULL,
    cloudinary_id character varying(128) NOT NULL,
    title character varying(128) NOT NULL,
    image_url character varying(128) NOT NULL,
    created_on date NOT NULL
);


ALTER TABLE public.gifs OWNER TO team_work;

--
-- TOC entry 213 (class 1259 OID 41114)
-- Name: gifs_comment; Type: TABLE; Schema: public; Owner: team_work
--

CREATE TABLE public.gifs_comment (
    id integer NOT NULL,
    gif_id character varying(128) NOT NULL,
    comment character varying(128) NOT NULL,
    created_on date NOT NULL
);


ALTER TABLE public.gifs_comment OWNER TO team_work;

--
-- TOC entry 211 (class 1259 OID 41110)
-- Name: gifs_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.gifs_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gifs_comment_id_seq OWNER TO team_work;

--
-- TOC entry 2885 (class 0 OID 0)
-- Dependencies: 211
-- Name: gifs_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.gifs_comment_id_seq OWNED BY public.gifs_comment.id;


--
-- TOC entry 208 (class 1259 OID 32917)
-- Name: gifs_id_seq; Type: SEQUENCE; Schema: public; Owner: team_work
--

CREATE SEQUENCE public.gifs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gifs_id_seq OWNER TO team_work;

--
-- TOC entry 2886 (class 0 OID 0)
-- Dependencies: 208
-- Name: gifs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: team_work
--

ALTER SEQUENCE public.gifs_id_seq OWNED BY public.gifs.id;


--
-- TOC entry 2721 (class 2604 OID 24692)
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- TOC entry 2722 (class 2604 OID 32911)
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- TOC entry 2724 (class 2604 OID 41120)
-- Name: articles_comment id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.articles_comment ALTER COLUMN id SET DEFAULT nextval('public.articles_comment_id_seq'::regclass);


--
-- TOC entry 2720 (class 2604 OID 24681)
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- TOC entry 2723 (class 2604 OID 32922)
-- Name: gifs id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.gifs ALTER COLUMN id SET DEFAULT nextval('public.gifs_id_seq'::regclass);


--
-- TOC entry 2725 (class 2604 OID 41119)
-- Name: gifs_comment id; Type: DEFAULT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.gifs_comment ALTER COLUMN id SET DEFAULT nextval('public.gifs_comment_id_seq'::regclass);


--
-- TOC entry 2867 (class 0 OID 24689)
-- Dependencies: 205
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.admins (id, firstname, lastname, email, password, gender, jobrole, department, address) FROM stdin;
\.


--
-- TOC entry 2869 (class 0 OID 32908)
-- Dependencies: 207
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.articles (id, title, body, created_on) FROM stdin;
1	Node-Postgres	node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database. It has support for callbacks, promises, async/await, connection pooling, prepared statements, cursors, streaming results, C/C++ bindings, rich type parsing, and more! Just like PostgreSQL itself there are a lot of features: this documentation aims to get you up and running quickly and in the right direction. It also tries to provide guides for more advanced & edge-case topics allowing you to tap into the full power of PostgreSQL from node.js	2020-01-30
5	Git JS Tutoral	Git represents a paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.	2020-01-30
6	Empire	Empire is an American musical drama television series created by Lee Daniels and Danny Strong for Fox. It is a joint production by Imagine Television and 20th Century Fox Television and syndicated by 20th Television. Although it is filmed in Chicago,[2][3] the show is set in New York. The series centers on the fictional hip hop music and entertainment company Empire Entertainment, and the drama among the members of the founders' family as they fight for control of it.	2020-01-30
8	Amara	Njoku	2020-05-09
11	Latest Title	Latest Body	2020-05-13
13	Software Engineer	Body.Software Engineer Body.Software EngineerBody.Software EngineerBody.Software EngineerBody.Software EngineerBody.Software Engineer	2020-05-13
14	Software Engineer	console.log(artcleResult);console.log(artcleResult);console.log(artcleResult);console.log(artcleResult);console.log(artcleResult);	2020-05-13
16	Awesome Work Space	This is one of my future work station. Looking Forward to it!!!	2020-05-16
17	Most Used Passport	It is my Most Used Passport and this is because I am smiling 	2020-05-16
18	Hunger	The man is hungrily angry	2020-05-16
19	Software Engineer	One of the Cert to be an engineer	2020-05-16
20	Simple Map	This certificate is like a map	2020-05-16
21	Title wey tire	Body wey tire	2020-05-16
\.


--
-- TOC entry 2874 (class 0 OID 41113)
-- Dependencies: 212
-- Data for Name: articles_comment; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.articles_comment (id, article_id, comment, created_on) FROM stdin;
1	1	A code image	2020-02-10
2	1	Awesome article	2020-02-10
3	6	I love this Awesome article	2020-02-10
4	5	I love this article	2020-02-10
5	5	I love this article	2020-02-10
6	6	Nice article, keep it up Boss!	2020-02-10
7	9	Nice article, keep it up Boss!	2020-02-10
\.


--
-- TOC entry 2865 (class 0 OID 24678)
-- Dependencies: 203
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.employees (id, first_name, last_name, email, password, gender, job_role, department, address) FROM stdin;
1	Ebere	Njoku	ebere@ebere.com	$2b$10$eTQPSfaOutaFLLMbW1tckOporoEEr9k7mez/rLCU6sekPEAE.zsWG                                                                                          	male	Software Engineer	Web dev	Enugu
5	Amara	Njoku	amara@gmail.com	$2b$10$kI1kXvi/iIP2MAddnh1IFe5.xcvkMpw4jKLO06.pL.z7mg5Utmxq2                                                                                          	female	fashiom	design	nsukka
9	Samson Ebere	Njoku	samsoneberenjoku@gmail.com	$2b$10$c1nigy278p91L4xMj8EvkemO1qk0gug5X7rPgxdKgQtdw.Phh21V6                                                                                          	Male	frontend	Software Engineering	Independence layout
\.


--
-- TOC entry 2871 (class 0 OID 32919)
-- Dependencies: 209
-- Data for Name: gifs; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.gifs (id, cloudinary_id, title, image_url, created_on) FROM stdin;
6	xmakgbhujmlyvce5jtkb	A code image	https://res.cloudinary.com/ebysoft/image/upload/v1581361809/xmakgbhujmlyvce5jtkb.jpg	2020-02-10
7	tblm89fsdhychdxy1nnb	Dream Work Space	https://res.cloudinary.com/ebysoft/image/upload/v1581361939/tblm89fsdhychdxy1nnb.jpg	2020-02-10
8	zbmripix8o2khx00pn2a	Latest Image	https://res.cloudinary.com/ebysoft/image/upload/v1589367200/zbmripix8o2khx00pn2a.jpg	2020-05-13
9	jcwnkgepb1w19mlmzmkl	Latest Image	https://res.cloudinary.com/dunksyqjj/image/upload/v1589367709/jcwnkgepb1w19mlmzmkl.jpg	2020-05-13
10	aobubeiygpqndq1wmnxd	Another Latest Image	https://res.cloudinary.com/dunksyqjj/image/upload/v1589447490/aobubeiygpqndq1wmnxd.jpg	2020-05-14
49	qxh6i0locbvgtgthl2ir	SVG Logo	https://res.cloudinary.com/dunksyqjj/image/upload/v1589587460/qxh6i0locbvgtgthl2ir.png	2020-05-16
50	wu1kbbvod0j7mfbn3ovk	CV	https://res.cloudinary.com/dunksyqjj/image/upload/v1589588461/wu1kbbvod0j7mfbn3ovk.png	2020-05-16
51	lsrl4baqiy6zbza0toyq	Passport	https://res.cloudinary.com/dunksyqjj/image/upload/v1589589167/lsrl4baqiy6zbza0toyq.png	2020-05-16
52	uh2eoitrf1vi3bkkhhdm	Awesome Work Space	https://res.cloudinary.com/dunksyqjj/image/upload/v1589589717/uh2eoitrf1vi3bkkhhdm.jpg	2020-05-16
53	clz6qw9hcmoxhn06jisu	Most Used Passport	https://res.cloudinary.com/dunksyqjj/image/upload/v1589590043/clz6qw9hcmoxhn06jisu.jpg	2020-05-16
54	ovue6mwsi1jqozy1yzyf	Hunger	https://res.cloudinary.com/dunksyqjj/image/upload/v1589590151/ovue6mwsi1jqozy1yzyf.jpg	2020-05-16
55	cg2s0vaxzbspk1ixbcdy	Software Engineer	https://res.cloudinary.com/dunksyqjj/image/upload/v1589591276/cg2s0vaxzbspk1ixbcdy.jpg	2020-05-16
56	gdfm3o0kfo42lrubvpx9	Simple Map	https://res.cloudinary.com/dunksyqjj/image/upload/v1589591349/gdfm3o0kfo42lrubvpx9.jpg	2020-05-16
57	r19x4w9snznewzkygnfq	Title wey tire	https://res.cloudinary.com/dunksyqjj/image/upload/v1589591487/r19x4w9snznewzkygnfq.jpg	2020-05-16
\.


--
-- TOC entry 2875 (class 0 OID 41114)
-- Dependencies: 213
-- Data for Name: gifs_comment; Type: TABLE DATA; Schema: public; Owner: team_work
--

COPY public.gifs_comment (id, gif_id, comment, created_on) FROM stdin;
1	9	Nice article, keep it up Boss!	2020-02-10
2	6	What a beauty of code I behold!	2020-02-10
3	6	This workspace will be my starting point!	2020-02-10
4	7	This workspace will be my starting point!	2020-02-10
5	9	This workspace will be my starting point!	2020-02-10
6	9	This workspace will be my starting point!	2020-02-21
7	7	This workspace will be my starting point!	2020-02-21
\.


--
-- TOC entry 2887 (class 0 OID 0)
-- Dependencies: 204
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.admins_id_seq', 1, false);


--
-- TOC entry 2888 (class 0 OID 0)
-- Dependencies: 210
-- Name: articles_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.articles_comment_id_seq', 7, true);


--
-- TOC entry 2889 (class 0 OID 0)
-- Dependencies: 206
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.articles_id_seq', 21, true);


--
-- TOC entry 2890 (class 0 OID 0)
-- Dependencies: 202
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.employees_id_seq', 9, true);


--
-- TOC entry 2891 (class 0 OID 0)
-- Dependencies: 211
-- Name: gifs_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.gifs_comment_id_seq', 7, true);


--
-- TOC entry 2892 (class 0 OID 0)
-- Dependencies: 208
-- Name: gifs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: team_work
--

SELECT pg_catalog.setval('public.gifs_id_seq', 57, true);


--
-- TOC entry 2729 (class 2606 OID 24697)
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- TOC entry 2735 (class 2606 OID 41123)
-- Name: articles_comment articles_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.articles_comment
    ADD CONSTRAINT articles_comment_pkey PRIMARY KEY (id);


--
-- TOC entry 2731 (class 2606 OID 32916)
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- TOC entry 2727 (class 2606 OID 24686)
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- TOC entry 2737 (class 2606 OID 41124)
-- Name: gifs_comment gifs_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.gifs_comment
    ADD CONSTRAINT gifs_comment_pkey PRIMARY KEY (id);


--
-- TOC entry 2733 (class 2606 OID 32924)
-- Name: gifs gifs_pkey; Type: CONSTRAINT; Schema: public; Owner: team_work
--

ALTER TABLE ONLY public.gifs
    ADD CONSTRAINT gifs_pkey PRIMARY KEY (id);


-- Completed on 2020-05-23 01:46:38

--
-- PostgreSQL database dump complete
--

